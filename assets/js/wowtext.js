//Obfuscate text
function obftext(elemID){
  let b = baffle(document.querySelector(elemID));
  // Start obfuscating
  b.start();

  // Set options
  b.set({
    speed: 100,
    characters: '+-•~!?=*░▒▓█</>'
  });

  // Reveal text over 1000ms, delay 500ms
  b.reveal(1000,500);
}

//Animation
function viz(){
  const wrapperLz = document.querySelector('.vizdis');
  const numberOfLz = 80;
  const duration = 15000;
  const delay = duration / numberOfLz;

  let tl = anime.timeline({
    duration: delay,
    complete: function() { tl.restart(); }
  });

  function createL(i) {
    let lz = document.createElement('div');
    const rotate = (270 / numberOfLz) * i+135; //Create 250 degree Rotation with -135 degree offset
    const translateY = -50;
    const hue = Math.round(360 / numberOfLz * i);
    lz.classList.add('vizline');
    //lz.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
    lz.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
    tl.add({
      begin: function() {
        anime({
          targets: lz,
          //backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
          rotate: [rotate + 'deg', rotate + 10 +'deg'],
          translateY: [translateY + '%', translateY + 10 + '%'],
          scale: [1, 1.25],
          easing: 'easeInOutSine',
          direction: 'alternate',
          duration: duration * .1
        });
      }
    });
    wrapperLz.appendChild(lz);
  };

  for (let i = 0; i < numberOfLz; i++) createL(i);
}

//Button
function jumbleWords(){
  obftext(".cms");
}

//Change text
function typeKeywords(){
  var cm = document.getElementById('keyterms');
  var typewriter = new Typewriter(cm, {
    strings: ['An <strong>exciting</strong>', 'A <strong>fun</strong>', ' An <strong>unique</strong>', 'An <strong>engaging</strong>', 'An <strong>autonomous</strong>'],
    autoStart: true,
    loop: true,
    pauseFor: 1500,
    changeDelay: 'natural',
    changeDeleteSpeed: 'natural'
  });
}

//onLoad
document.addEventListener('DOMContentLoaded', function() {
  obftext('.cover-heading');
  typeKeywords();
  viz();
}, false);
