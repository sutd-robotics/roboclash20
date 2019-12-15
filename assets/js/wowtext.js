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

//Add/remove class
function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

//Button
function jumbleWords(){
	var lines = [
    'Are you ready?',
    '(ready)?signup():prepare();',
	'Will robots inherit the earth? Yes, but they will be our children. - Marvin Minsky',
	'A robot may not injure a human being, or, through inaction, allow a human being to come to harm. - Issac Asimov'
];
var randomC = Math.floor(Math.random()*lines.length);
var dt = document.querySelector('.edate').innerText;
var btnRegister = document.getElementById('brg');

 document.querySelector('.edate').innerText=lines[randomC];
   obftext(".edate");
addClass(btnRegister,"disabled");
 var counter = setInterval(function(){
	 document.querySelector('.edate').innerText=dt;
   obftext(".edate");
   removeClass(btnRegister,"disabled");
	 clearInterval(counter) // stop interval
},5000);
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
    obftext('.edate');
  typeKeywords();
  animCog();
}, false);


//Animation
function animCog(){
  const svgPath = document.querySelector('.icog');

const svgText = anime({
  targets: svgPath,
  translateX: 500,
  rotate: 180,
     direction: 'alternate',
     loop: false,
     delay: 0,
     endDelay: 200,
     duration: 2000,
     easing: 'easeInOutCubic'
});
}
