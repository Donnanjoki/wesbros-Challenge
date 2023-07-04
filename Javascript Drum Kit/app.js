function playSound(e){
    // selects the audio element where data-key="e.keyCode"
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  
    //if there is no audio element with the corresponding keyCode, then don't do anything
    if(!audio) return;
    audio.currentTime = 0
    audio.play()
    
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  
    key.classList.add('playing')
  }
  
  function removeTransition(e){
    //transitionend is triggered on a variety of properties, (border, box shadow, etc)
    // just select one - in this case 'transform'
    if(e.propertyName != 'transform') return;
    e.target.classList.remove('playing')
  }
  
  const keys = document.querySelectorAll(".key")
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  window.addEventListener('keydown', playSound)