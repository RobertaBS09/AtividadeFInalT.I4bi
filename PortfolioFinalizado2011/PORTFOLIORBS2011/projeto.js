let hoverTimeout;

function startHover(element) {
  hoverTimeout = setTimeout(function() {
    element.querySelector('.popup-image').style.display = 'block';
  }, 3000); // 3 segundos
}

function stopHover(element) {
  clearTimeout(hoverTimeout);
  element.querySelector('.popup-image').style.display = 'none';
}
