const board = document.querySelector('#board')
const colors = getListOfColors(8)
const squaresNumber = 500

for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}

function getListOfColors(n) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(generateColor())
    }
    return arr
}

function setColor(element) {
    const color = colors[Math.floor(Math.random() * colors.length)]
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}