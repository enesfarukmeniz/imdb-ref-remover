chrome.runtime.onMessage.addListener(function (message, sender, response) {
    if (message.loadURL) {
        var regex = /^(.*)(\?ref.*)$/;
        if (regex.test(sender.tab.url)) {
            var newUrl = sender.tab.url.replace(regex, "$1");
            chrome.tabs.update(sender.tab.id, {url: newUrl})
        }
    }
});
