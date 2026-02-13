
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

try {
  console.log("Testing jsdom...");
  const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`, {
    url: "https://example.org/",
    referrer: "https://example.com/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
  });
  console.log("JSDOM created.");
} catch (e) {
  console.error(e);
}
