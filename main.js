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

let currentTheme = 1; // Track the current theme

document.getElementById("Icon").addEventListener('click', () => {
    let classMap = {};

    // Determine which theme to apply based on currentTheme
    if (currentTheme === 1) {
        classMap = {
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
        currentTheme = 2; // Move to the next theme
    } else if (currentTheme === 2) {
        classMap = {
          'bbl50':'orange-red-light',
           'bbl300':'orange-red-medium',
          'sb600':'orange-red-shadow-dark',
           'hsb500':'orange-red-shadow-hover',
          'tb500':'orange-red-text-primary',
          'tf500':'orange-red-text-secondary',
           'bbl500':'orange-red-background',
          'tbl500':'orange-red-text-highlight',
          'tb600':'orange-red-text-accent',
            
        };
        currentTheme = 3; // Move to the next theme
    } else {
        classMap = {
        'orange-red-light' :'bgl50',
          'orange-red-medium' : 'bgl300',
        'orange-red-shadow-dark':'sg600',
          'orange-red-shadow-hover':'hsg500',
        'orange-red-text-primary':'tp500',
        'orange-red-text-secondary':'tf500',
          'orange-red-background':'bgl500',
         'orange-red-text-highlight':'tl500',
        'orange-red-text-accent':'tg600'
        };
        currentTheme = 1; // Reset to the first theme
    }

    // Apply classes based on classMap
    Object.keys(classMap).forEach(originalClass => {
        document.querySelectorAll(`.${originalClass}`).forEach(element => {
            element.classList.replace(originalClass, classMap[originalClass]);
        });
    });
});
