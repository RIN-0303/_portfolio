let slides = document.querySelector('.img-slider-2-container')
let slide = document.querySelectorAll('.img-slider-2-inner')
let currentIdx = 0
let slideCount = slide.length
let slideWidth = 480
let leftBtn = document.getElementById('btn-left')
let rightBtn = document.getElementById('btn-right')

let updateWidth = () => {
  let currentSlides = document.querySelectorAll('.img-slider-2-inner')
  let newSlideCount = currentSlides.length

  let newWidth = slideWidth * newSlideCount + 'px'
  slides.style.width = newWidth
}

let setInitialPos = () => {
  let initialTranslate = -slideWidth * slideCount
  slides.style.transform = 'translateX(' + initialTranslate + 'px)'
}

let makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true)
    cloneSlide.classList.add('clone')
    slides.appendChild(cloneSlide)
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true)
    cloneSlide.classList.add('clone')
    slides.prepend(cloneSlide)
  }
  updateWidth()
  setInitialPos()
  setTimeout(() => {
    slides.classList.add('animated')
  }, 100)
}
makeClone()

let moveSlide = (num) => {
  slides.style.left = -num * slideWidth + 'px'
  currentIdx = num
  console.log(currentIdx, slideCount)
  if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout(() => {
      slides.classList.remove('animated')
      slides.style.left = '0px'
      currentIdx = 0
    }, 500)
    setTimeout(() => {
      slides.classList.add('animated')
    }, 600)
  }
}

leftBtn.addEventListener('click', () => {
  moveSlide(currentIdx - 1)
})
rightBtn.addEventListener('click', () => {
  moveSlide(currentIdx + 1)
})
