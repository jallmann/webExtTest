async function registerContentScript() {

  // if (contentScriptConfig) {
  //   // TODO: Avoid using window to pass the content script config
  //   await browser.contentScripts.register({
  //     js: [
  //       {
  //         code: `window.openWpmContentScriptConfig = ${JSON.stringify(
  //           contentScriptConfig,
  //         )};`,
  //       },
  //     ],
  //     matches: ["<all_urls>"],
  //     allFrames: true,
  //     runAt: "document_start",
  //     matchAboutBlank: true,
  //   });
  // }
  return browser.contentScripts.register({
    js: [{ file: "content/content.js" }],
    matches: ["<all_urls>"],
    allFrames: true,
    runAt: "document_start",
    matchAboutBlank: true,
  });
}

registerContentScript();
