const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const puppeteer = require("puppeteer");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// async function scraper() {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();

//   await page.goto("https://www.darkreading.com/");
//   page.waitFor(5000);
//   await page.screenshot({ path: "./1.png" });
//   const data = page.evaluate(() => {
//     const pTag = document.querySelectorAll("p");
//     return pTag;
//   });
//   await browser.close();
//   console.log(data);
//   return data;
// }

// exports.scrape = functions.https.onRequest((request, response) => {
//   cors(request, response, async () => {
//     const data = await scraper();

//     response.send(data);
//   });
// });
const scrapeImages = async () => {
  //   const browser = await puppeteer.launch({ headless: true });
  //   const page = await browser.newPage();

  //   await page.goto("https://www.instagram.com/accounts/login/");

  //   // Login form

  //   // Social Page

  //   await page.waitForSelector("img ", {
  //     visible: true,
  //   });

  //   // Execute code in the DOM
  //   const data = await page.evaluate(() => {
  //     const images = document.querySelectorAll("img");

  //     const urls = Array.from(images).map(v => v.src);

  //     return urls;
  //   });

  //   await browser.close();

  //   console.log(data);

  return "data";
};

exports.scraper = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const data = await scrapeImages();
    response.send(data);
  });
});
