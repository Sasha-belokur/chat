;(function () {
  var addBtn = document.querySelector('.add-btn');

  function ChatWindow() {
    var template = document.querySelector('.chat-window-tempate').content;
    var chatWindow = template.cloneNode(true);
    ChatWindow.counter++;

    chatWindow.querySelector('.chat-header').textContent = 'Window #' + ChatWindow.counter;
    chatWindow.querySelector('.chat-iframe').src = 'chat.html';

    return chatWindow;
  } 

  ChatWindow.counter = 0;

  function addChatWindow() {
    var chatsContainer = document.querySelector('.chats-container');
    var chatWindow = new ChatWindow();

    chatsContainer.appendChild(chatWindow);
  }

  function addBtnClickHandler() {
    addChatWindow();
    window.sendMessage({
      text: "Window #" + ChatWindow.counter + " has joined",
      info: true
    })
  }

  addBtn.addEventListener('click', addBtnClickHandler);
})();
