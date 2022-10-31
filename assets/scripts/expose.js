// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var h = null;
  var v = 50;
  var horn = document.getElementById('horn-select');
  horn.addEventListener('change', (event) =>{
    const hornImg = document.getElementById('expose').getElementsByTagName('img')
    hornImg[0].src = `assets/images/${event.target.value}.svg`
    h = event.target.value
  });
  var vol = document.getElementById('volume');
  vol.addEventListener('input',changeVol);
  function changeVol(e){
    var icon = document.getElementById('volume-controls').getElementsByTagName('img')
    v = e.target.value
    if (v == 0){
      icon[0].src = `assets/icons/volume-level-0.svg`
    } else if (v >= 67){
      icon[0].src = `assets/icons/volume-level-3.svg`
    } else if (v >= 33){
      icon[0].src = `assets/icons/volume-level-2.svg`
    } else{
      icon[0].src = `assets/icons/volume-level-1.svg`
    }
  }
  var play = document.querySelector('button')
  play.addEventListener('click', (event) =>{
    let aud = document.querySelector('audio');
    aud.src = `assets/audio/${h}.mp3`;
    aud.volume = v/100;
    if (h == 'party-horn'){
      var jsConfetti = new JSConfetti()
      jsConfetti.addConfetti();
    }
    aud.play()
  })
  // TODO
}