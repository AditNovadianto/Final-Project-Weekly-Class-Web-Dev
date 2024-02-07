const nav = document.querySelector('.navbar');
const navbarContent = document.querySelector('.navbar-content');
const navbarContentMobile = document.querySelector('.navbar-content-mobile');
const hamburgerButton = document.querySelector('#hamburger');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const buttonSumbit = document.getElementById('submit')
const errorName = document.getElementById('errorName')
const errorEmail = document.getElementById('errorEmail')

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    nav.classList.add('navbar-scroll');
    navbarContent.classList.add('navbar-content-scroll');
    hamburgerButton.classList.add('hamburger-scroll');
  } else {
    nav.classList.remove('navbar-scroll');
    navbarContent.classList.remove('navbar-content-scroll');
    hamburgerButton.classList.remove('hamburger-scroll');
  }
});

inputName.addEventListener('input', (e) => {
  if (e.target.value === '') {
    errorName.classList.add('error')
    return
  } else {
    errorName.classList.remove('error')
  }
})

inputEmail.addEventListener('input', (e) => {
  if (e.target.value === '') {
    errorEmail.classList.add('error')
    return
  } else {
    errorEmail.classList.remove('error')
  }
})

buttonSumbit.addEventListener('click', (e) => {
  e.preventDefault();

  if (inputName.value === '') {
    errorName.classList.add('error')
  } else {
    errorName.classList.remove('error')
  }

  if (inputEmail.value === '') {
    errorEmail.classList.add('error')
  } else {
    errorEmail.classList.remove('error')
  }

  // console.log(inputName.value, inputEmail.value)
  
  if (inputName.value !== '' && inputEmail.value !== '') {
    alert('Terima Kasih Telah Mengisi Formulir Ini!')
  }
})

hamburgerButton.addEventListener('click', () => {
  navbarContentMobile.classList.toggle('show');
})

const isClickOutside = (e) => {
  return !navbarContentMobile.contains(e.target) && !hamburgerButton.contains(e.target);
}

document.addEventListener('click', (e) => {
  if (isClickOutside(e)) {
    navbarContentMobile.classList.remove('show');
  } else {
    return
  }
})