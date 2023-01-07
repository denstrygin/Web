const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length - 1
const container = document.querySelector('.container')

let activeSlideId = 0

sidebar.style.top = `-${slidesCount * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideId++
        if (activeSlideId > slidesCount) {
            activeSlideId = 0
        }
    } else if (direction === 'down') {
        activeSlideId--
        if (activeSlideId < 0) {
            activeSlideId = slidesCount
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideId * height}px)`
    sidebar.style.transform = `translateY(${activeSlideId * height}px)`
}