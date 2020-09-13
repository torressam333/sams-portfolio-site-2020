const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const arrowTop = document.querySelector('.goToTop');

//Toggles nav menu when burger is clicked
hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
   mobileMenu.classList.toggle('active');
});

//Navbar changes colors at 200px down the page
document.addEventListener('scroll', () => {
   let scrollPosition = window.scrollY;
   scrollPosition > 200 ? header.style.backgroundColor = '#19262d' : header.style.backgroundColor = 'transparent';
});

/*Close nav menu in when link is chosen*/
menu_item.forEach(item => {
   item.addEventListener('click', () =>{
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
   })
});

//Make top page arrow appear further down the page
document.addEventListener('scroll', () => {
   let scrollPosition = window.scrollY;
   scrollPosition > 1800 ? arrowTop.style.opacity = '1' : arrowTop.style.opacity = '0';
});