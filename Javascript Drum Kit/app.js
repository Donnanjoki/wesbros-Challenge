// key functionality
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop function from running all together
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it is not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

// to add click functionality

function playSound(e) {
    let code;
    if (e.keyCode) {
      // it was a keypress, get the keycode as usual
      code = e.keyCode;
    } else {
      // it was a click.  Read the keycode from the div that was clicked
      code = this.dataset.key;
    }
  
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);
  
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

for (let i=0, key; key = keys[i]; i++) {
    key.addEventListener('click', playSound);
}
