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

console.log("Background script is running. Starting to wait.");
setTimeout(registerContentScript, 5000);

function addPersistentWebRequestListener() {
  browser.webRequest.onBeforeRequest.addListener(
    dummyWebRequestListener,
    {urls: ["<all_urls>"]},
    ["blocking"]
  );
}
let detailsBuffer = [];
console.log("Blocking webRequest listener was added.");
addPersistentWebRequestListener();

function dummyWebRequestListener(details) {
  console.log("Request intercepted blocking: " + details.requestId);
  detailsBuffer.push(details);
  return new Promise((resolve, reject) => {
    console.log("Register listener that resolves the blocking promise.");
    window.addEventListener("promiseResolve", resolve);
    browser.runtime.onMessage.addListener(() => {resolve();});
  }).then(function() {
    return {};
  });
}

function removeListener() {
  console.log("Add new listener and remove old one.");
  browser.webRequest.onBeforeRequest.addListener(
    realListener,
    {urls: ["<all_urls>"]},
    ["blocking"]
  );
  browser.webRequest.onBeforeRequest.removeListener(dummyWebRequestListener);
  let releaseEvent = new CustomEvent("promiseResolve");
  window.dispatchEvent(releaseEvent);
  detailsBuffer.forEach(realListener);
}

function realListener(details) {
  console.log("simply intercept request: " + details.requestId)
}

setTimeout(removeListener, 5000);
