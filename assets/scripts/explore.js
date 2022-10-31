// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var words = null
  var txt = document.getElementById('text-to-speak');
  txt.addEventListener('input', event => {
    words = event.target.value
  })
  const i = document.querySelector('img');
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select')
  let voices = [];
  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  const b = document.querySelector('button')
  console.log(b)
  b.addEventListener('click', (event) => {
    console.log(words)
    event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(words);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis)
    if (synth.speaking==true){
        i.src = 'assets/images/smiling-open.png'
        console.log(i.src)
        setTimeout(1000)
    };
    
    
  });
  
  // TODO
}