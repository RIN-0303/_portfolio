const dropdownMenu = document.querySelector('.dropdown-list')
const dropdownBtn = document.querySelector('.user-img')

dropdownBtn.addEventListener('click', function() {
  if (this.active) {
    dropdownMenu.classList.remove('active')
  } else {
    dropdownMenu.classList.add('active')
  }
  this.active = !this.active
})
dropdownBtn.active = false