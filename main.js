var typed = new Typed('#element', {
    strings: ['Learner', 'Developer', 'Student'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});


const nav = document.querySelector('#navigation');

function showNav(){
    nav.classList.add('show');
}

function hidewNav(){
    nav.classList.remove('show');
}
var currPos = window.scrollY;
document.addEventListener('scroll', () => {
  if (window.scrollY < currPos) {
  //scroll up
    hidewNav();
  } else {
  //scroll down
    showNav();
  }
  currPos = window.scrollY;
});