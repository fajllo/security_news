const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const puppeteer = require("puppeteer");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
initializeApp();
const db = getFirestore();
const darkreading = db.collection("darkreading");
const runtimeOpts = {
  timeoutSeconds: 300,
  memory: "1GB",
};

async function getNews() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.darkreading.com");
  await page.waitFor(15000);
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

exports.webScraper = functions
  .runWith(runtimeOpts)
  .https.onRequest((request, response) => {
    cors(request, response, async () => {
      const data = await getNews();
      response.send(data);
    });
  });
