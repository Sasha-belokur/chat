;(function() {
  var sendBtn = document.querySelector('.send-btn');
  var messageInput = document.querySelector('.message-input');
  var messagesContainer = document.querySelector('.messages-container');
  var ENTER_KEY_CODE = 13;

  function showMessage (message) {
    var msg = document.createElement('li');

    msg.textContent = message.text;
    msg.classList.add('msg');

    if (message.own) {
      msg.classList.add('own-msg')
    } else if (message.info) {
      msg.classList.add('info-msg');
    }

    messagesContainer.appendChild(msg);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
  }

  function onMesssageHandler (evt) {
    showMessage({
      text: evt.data.text,
      own: evt.data.own,
      info: evt.data.info
    })
  }

  window.addEventListener('message', onMesssageHandler);

  function sendBtnClickHandler () {

    if (messageInput.value.length) {
      showMessage({text: messageInput.value, own: true});
      window.sendMessage({text: messageInput.value});
      messageInput.value = "";
    }
    
  }

  function sendBtnKeyDownHandler (evt) {

    if (messageInput.value.length && evt.keyCode === ENTER_KEY_CODE) {
      showMessage({text: messageInput.value, own: true});
      window.sendMessage({text: messageInput.value});
      messageInput.value = "";
    }

  }

  sendBtn.addEventListener('click', sendBtnClickHandler);
  window.addEventListener('keydown', sendBtnKeyDownHandler);
})();