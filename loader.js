chrome.storage.local.get(['key'], function(result) {
    console.log("autoloader run")

    let test = chrome.runtime.getURL("script2.js");

    let script = document.createElement('script');
    script.src = test;
    script.type = 'text/javascript';
    script.onload = function () {
        console.log('load script');
    }
    document.querySelector('body').append(script);
    script.remove();
});
