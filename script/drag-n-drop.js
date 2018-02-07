;(function () {
  var draggableItem;
  var coords;
  var shiftX;
  var shiftY;

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
    coords = getCoords(draggableItem);
    shiftX = evt.pageX - coords.left;
    shiftY = evt.pageY - coords.top;

    draggableItem.style.zIndex = 200;
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
    draggableItem.style.zIndex = "";
  }

  function documentMouseDownHandler(evt) {
    startMove(evt);    
  }

  document.addEventListener('mousedown', documentMouseDownHandler)
})();
