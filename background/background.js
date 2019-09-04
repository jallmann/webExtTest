async function registerContentScript() {
  console.log("Content script is registered for <all_urls>");
  return browser.contentScripts.register({
    js: [{ file: "content/content.js" }],
    matches: ["<all_urls>"],
    allFrames: true,
    runAt: "document_start",
    matchAboutBlank: true,
  });
}

console.log("Background script is running. Starting to wait.")
setTimeout(registerContentScript, 5000);
