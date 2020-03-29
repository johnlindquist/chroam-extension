chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("clicked")
    chrome.tabs.sendMessage(tab.id, "toggle");
});

chrome.commands.onCommand.addListener(function (command) {
    console.log('Command:', command);
    if (command === "show-roam") {
        chrome.tabs.query({ active: true }, function (tabs) {
            console.log(tabs) //not quite working. Keyboard shortcut it a bit flaky
            chrome.tabs.sendMessage(tabs[0].id, "toggle");

        })
    }
});