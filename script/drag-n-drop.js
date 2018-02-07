;(function () {
  var draggableItem;
  var shiftX;
  var shiftY;
  var activeWindow;

  function getCoords (elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

  function moveAt (evt) {
    draggableItem.style.left = evt.pageX - shiftX + 'px';
    draggableItem.style.top = evt.pageY - shiftY + 'px';
  }

  function startMove (evt) {
    evt.preventDefault();
    if (evt.which !== 1) return;
    if ( !evt.target.closest('.draggable') ) return;

    draggableItem = evt.target.closest('.draggable');

    if (activeWindow) {
      activeWindow.classList.remove('active')
    }

    activeWindow = draggableItem;
    activeWindow.classList.add('active');

    var coords = getCoords(draggableItem);
    shiftX = evt.pageX - coords.left;
    shiftY = evt.pageY - coords.top;
    document.body.classList.add('drag');
    moveAt (evt);

    document.addEventListener('mousemove', documentMouseMoveHandler);
    draggableItem.addEventListener('mouseup', documentMouseUpHandler); 
  }

  function documentMouseMoveHandler (evt) {
    moveAt(evt);
  }

  function documentMouseUpHandler () {
    document.removeEventListener('mousemove', documentMouseMoveHandler);
    draggableItem.removeEventListener('mouseup', documentMouseUpHandler);
    draggableItem.style.zIndex = '';
    document.body.classList.remove('drag');
  }

  function documentMouseDownHandler(evt) {
    startMove(evt);    
  }

  document.addEventListener('mousedown', documentMouseDownHandler)
})();
