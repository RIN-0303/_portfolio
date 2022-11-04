const menu01 = document.querySelector('.menu-1')
const menu02 = document.querySelector('.menu-2')
const menu03 = document.querySelector('.menu-3')
const menu04 = document.querySelector('.menu-4')
const menu05 = document.querySelector('.menu-5')

const menuContainer01 = document.querySelector('.menu-container-1')
const menuContainer02 = document.querySelector('.menu-container-2')
const menuContainer03 = document.querySelector('.menu-container-3')
const menuContainer04 = document.querySelector('.menu-container-4')

menu01.addEventListener('mouseenter', function () {
  menuContainer01.classList.add('active')
  menuContainer02.classList.remove('active')
  menuContainer03.classList.remove('active')
  menuContainer04.classList.remove('active')
})
menuContainer01.addEventListener('mouseleave', function () {
  menuContainer01.classList.remove('active')
})

menu02.addEventListener('mouseenter', function () {
  menuContainer02.classList.add('active')
  menuContainer01.classList.remove('active')
  menuContainer03.classList.remove('active')
  menuContainer04.classList.remove('active')
})
menuContainer02.addEventListener('mouseleave', function () {
  menuContainer02.classList.remove('active')
})

menu03.addEventListener('mouseenter', function () {
  menuContainer03.classList.add('active')
  menuContainer01.classList.remove('active')
  menuContainer02.classList.remove('active')
  menuContainer04.classList.remove('active')
})
menuContainer03.addEventListener('mouseleave', function () {
  menuContainer03.classList.remove('active')
})

menu04.addEventListener('mouseenter', function () {
  menuContainer04.classList.add('active')
  menuContainer01.classList.remove('active')
  menuContainer02.classList.remove('active')
  menuContainer03.classList.remove('active')
})

menuContainer04.addEventListener('mouseleave', function () {
  menuContainer04.classList.remove('active')
})

menu05.addEventListener('mouseenter', function () {
  menuContainer04.classList.remove('active')
})
