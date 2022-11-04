const menuContainer = document.querySelector('.menu-btn-box')
const menuItemsContainer = document.querySelector('.drawer-menu')
const navBag = document.querySelector('.nav-bag')

menuContainer.addEventListener('click', () => {
  menuContainer.classList.toggle('active')

  navBag.classList.add('active')

  if (menuContainer.classList.contains('active')) {
    menuItemsContainer.classList.add('active')
  } else {
    menuItemsContainer.classList.remove('active')
    navBag.classList.remove('active')
  }
})
