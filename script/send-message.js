;(function(){
  function sendMessage (msg) {
    var iframes = window.top.document.querySelectorAll('iframe');

    iframes.forEach(function (iframe) {
      if(iframe.contentWindow === window) {
        return;
      } else {
        iframe.contentWindow.postMessage(msg, '*');
      };
    })
  }
  if (!window.sendMessage) window.sendMessage = sendMessage;
})();
  