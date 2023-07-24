const prevButton = document.querySelector('#left-button')
const nextButton = document.querySelector('#right-button')
const carousel = document.querySelector('.carousel')
const carouselTrack = document.querySelector('.carousel-contents')
const carouselSlides = Array.from(carouselTrack.children)

carouselSlides.forEach((slide, index) => {

    const widthOfSlide = carouselSlides[0].getBoundingClientRect().width
    slide.style.left = (widthOfSlide * index) + 'px'
})



nextButton.addEventListener('click', event => {
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

prevButton.addEventListener('click', event => {
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