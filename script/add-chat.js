;(function () {
  var addBtn = document.querySelector('.add-btn');
  var chatWindowCounter = 0;

  function initChatWindow() {
    var template = document.querySelector('.chat-window-tempate').content;
    var chatWindow = template.cloneNode(true);
    chatWindowCounter++;

    chatWindow.querySelector('.chat-header').textContent = 'Window #' + chatWindowCounter;
    chatWindow.querySelector('.chat-iframe').src = 'chat.html';

    return chatWindow;
  } 

  function addChatWindow() {
    var chatWindow = initChatWindow();

    document.body.appendChild(chatWindow);
  }

  function addBtnClickHandler() {
    addChatWindow();
    window.sendMessage({
      text: "Window #" + chatWindowCounter + " has joined",
      info: true
    })
  }

  addBtn.addEventListener('click', addBtnClickHandler);
})();
