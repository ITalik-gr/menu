
let menu = document.querySelectorAll('.menu')[0],
    toggle = document.querySelector('.toggle'),
    list = document.querySelector('.menu__list');


toggle.addEventListener('click', function() {
  // menu.style.display = 'flex';
  // menu.style.margin = '0vh';
  menu.classList.toggle('menu__active');
});

list.addEventListener('click', function() {
  menu.classList.remove('menu__active');
});


console.log(list);