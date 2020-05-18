console.log("hello in background script");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message == 'buttonClicked') {
    // Create a new tab with options page
    console.log("in addlistener call function");


    chrome.tabs.create({ url: chrome.runtime.getURL("modal.html") });
   }
  });