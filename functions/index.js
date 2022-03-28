const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const puppeteer = require("puppeteer");
const { initializeApp } = require("firebase-admin/app");
const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp();
const db = getFirestore();
const dbRef = admin.firestore();

const darkreading = db.collection("darkreading");
const thehackernews = db.collection("thehackernews");
const latesthackingnews = db.collection("latesthackingnews");
const runtimeOpts = {
  timeoutSeconds: 300,
  memory: "1GB",
};

async function darkReading() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.darkreading.com");

  const shortNews = await page.$$eval(".wrap-latest-item", article => {
    return article.map(news => {
      let child = {
        latest: "",
        summary: "",
        author: "",
        link: "",
      };
      child.latest = news.children[0].innerText;
      child.summary = news.children[1].innerText;
      child.author = news.children[2].innerText;
      child.link = news.children[0].children[0].children[0].href;

      return child;
    });
  });

  browser.close();
  for (let news of shortNews) {
    darkreading.add({ ...news });
  }
  return shortNews;
}

async function theHackerNews() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://thehackernews.com/");

  const shortNews = await page.$$eval(".story-link", article => {
    return article.map(news => {
      let child = {
        latest: "",
        summary: "",
        author: "",
        link: "",
      };
      child.latest = news.children[0].children[1].children[2].innerText;
      child.summary = news.children[0].children[1].children[0].innerText;
      child.author = news.children[0].children[1].children[1].innerText;
      child.link = news.href;

      return child;
    });
  });
  browser.close();
  for (let news of shortNews) {
    thehackernews.add({ ...news });
  }
  return shortNews;
}
async function latestHackingNews() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://latesthackingnews.com/category/cyber-security-news/"
  );

  const shortNews = await page.$$eval(".list-post", article => {
    return article.map(news => {
      let child = {
        latest: "",
        summary: "",
        author: "",
        link: "",
      };

      child.summary =
        news.children[0].children[1].children[0].children[1].innerText;
      child.latest = news.children[0].children[1].children[1].innerText;
      child.author = "latesthackingnews.com";
      child.link =
        news.children[0].children[1].children[0].children[1].children[0].href;

      return child;
    });
  });
  browser.close();
  for (let news of shortNews) {
    latesthackingnews.add({ ...news });
  }
  return shortNews;
}
async function delData(colName) {
  const snapDarkReading = await dbRef.collection(colName).get();
  snapDarkReading.forEach(doc => {
    dbRef.collection(colName).doc(doc.id).delete();
  });
}
exports.scrapy = functions
  .runWith(runtimeOpts)
  .https.onRequest((request, response) => {
    cors(request, response, async () => {
      delData("darkreading");
      delData("thehackernews");
      delData("latesthackingnews");
      await darkReading();
      await theHackerNews();
      await latestHackingNews();
      response.send("operation complete!");
    });
  });
