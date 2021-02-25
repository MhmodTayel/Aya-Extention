console.log("Background Running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    command: "execute",
  };
  chrome.tabs.sendMessage(tab.id, msg);

}
