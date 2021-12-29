window.addEventListener('keydown', function (event) {
  const audio = document.querySelector(`audio[data-key='${event.keyCode}'`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
})

function clicked (key) {
  const audio = document.querySelector(`audio[data-key='${key}'`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
}