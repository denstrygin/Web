const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector("#time-list")
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        stratGame()
    }
})

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function stratGame() {
    setInterval(decriseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Score: <span class = "primary">${score}</span></h1>`
}

function decriseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
    
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(size, width - size)
    const y = getRandomNumber(size, height - size)
    circle.classList.add('circle')
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.background = generateColor()
    board.append(circle)
}

function getRandomNumber(max, min) {
    return Math.round(Math.random() * (max - min) + min)
}

function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}