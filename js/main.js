// sidebar
const sideBarIcon = document.querySelector('#side-bar')
const sideBarMenu = document.querySelector('#side-bar-menu')
const sideBarClose = document.querySelector('#side-bar-close')
const mediaQuery = window.matchMedia("(min-width: 1210px)")

sideBarIcon.addEventListener('click', () => {

    sideBarMenu.style.transform = 'translate(0rem)'
    sideBarIcon.style.display = 'none'
    sideBarClose.style.display = 'block'

})

sideBarClose.addEventListener('click', () => {

    sideBarMenu.style.transform = 'translate(16rem)'
    sideBarIcon.style.display = 'block'
    sideBarClose.style.display = 'none'

})

const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      // Hide sidebar icons when the screen width is greater than 1210px
      sideBarIcon.style.display = 'none';
      sideBarClose.style.display = 'none';
      //sideBarMenu.style.display = 'none'
    } else {
      // Show sidebar icons when the screen width is less than or equal to 1210px
      sideBarIcon.style.display = 'block';
      sideBarMenu.style.transform = 'translate(16rem)'

    }
  };
  
  // Add an event listener for the initial state of the media query
  handleMediaQueryChange(mediaQuery);
  
  // Add a listener for changes in the media query (e.g., when the window is resized)
  mediaQuery.addEventListener('change', handleMediaQueryChange);

// for carousel
const prevButton = document.querySelector('#left-button')
const nextButton = document.querySelector('#right-button')
const carousel = document.querySelector('.carousel')
const carouselTrack = document.querySelector('.carousel-contents')
const carouselSlides = Array.from(carouselTrack.children)

carouselSlides.forEach((slide, index) => {

    const widthOfSlide = carouselSlides[0].getBoundingClientRect().width
    slide.style.left = (widthOfSlide * index) + 'px'

})



nextButton.addEventListener('click', () => {
    const currentSlide = carouselTrack.querySelector('.is-selected')
    const nextSlide = currentSlide.nextElementSibling
    const destination = nextSlide.style.left
    const currentDot = carousel.querySelector('.current-dot')
    const nextDot = currentDot.nextElementSibling
    
    carouselTrack.style.transform = 'translate(-' + destination + ')'

    currentSlide.classList.remove('is-selected')
    nextSlide.classList.add('is-selected')
    currentDot.classList.remove('current-dot')
    nextDot.classList.add('current-dot')
    prevButton.style.opacity = 1

    if(!nextSlide.nextElementSibling) {
        nextButton.style.opacity = 0
    }
})

prevButton.addEventListener('click', () => {
    const currentSlide = carouselTrack.querySelector('.is-selected')
    const prevSlide = currentSlide.previousElementSibling
    const destination = prevSlide.style.left
    const currentDot = carousel.querySelector('.current-dot')
    const prevDot = currentDot.previousElementSibling
    
    carouselTrack.style.transform = 'translate(-' + destination + ')'

    currentSlide.classList.remove('is-selected')
    prevSlide.classList.add('is-selected')
    currentDot.classList.remove('current-dot')
    prevDot.classList.add('current-dot')
    nextButton.style.opacity = 1

    if(!prevSlide.previousElementSibling) {
        prevButton.style.opacity = 0
    }
})
