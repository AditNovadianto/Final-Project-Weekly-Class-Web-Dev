const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    nav.classList.add('navbar-scroll');
  } else {
    nav.classList.remove('navbar-scroll');
  }
});