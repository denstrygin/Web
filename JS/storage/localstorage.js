//LocalStorage
const myNumber = 42

localStorage.setItem('number', myNumber.toString())
console.log(localStorage.getItem('number'))

localStorage.removeItem('number')
localStorage.clear()

const obj = {
    name: 'Denis',
    age: 20,
}

localStorage.setItem('person', JSON.stringify(obj))

const raw = JSON.parse(localStorage.getItem('person'))
raw.age = 21
console.log(raw)

window.addEventListener('storage', event => {
    console.log(event)
})

// window.onstorage = () => {

// }

//SessionStorage
sessionStorage.setItem('person', JSON.stringify(obj))