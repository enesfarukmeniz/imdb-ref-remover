chrome.runtime.sendMessage({loadURL: true});

$("a").each(function (i, el) {
    if ($(el).attr("href")) {
        $(el).attr("href", $(el).attr("href").replace(/(\?ref.*)/, ''))
    }
})