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
document.getElementById("Icon").addEventListener('click', () => {
  const classMap = {
      'bgl50': 'bbl50',
      'bgl300': 'bbl300',
      'sg600': 'sb600',
      'hsg500': 'hsb500',
      'tp500': 'tb500',
      'tf500': 'tf500',
      'bgl500': 'bbl500',
      'tl500': 'tbl500',
      'tg600': 'tb600'
  };

  Object.keys(classMap).forEach(originalClass => {
      document.querySelectorAll(`.${originalClass}, .${classMap[originalClass]}`).forEach(element => {
          if (element.classList.contains(originalClass)) {
              element.classList.replace(originalClass, classMap[originalClass]);
          } else if (element.classList.contains(classMap[originalClass])) {
              element.classList.replace(classMap[originalClass], originalClass);
          }
      });
  });
});