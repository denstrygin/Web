function* strGenerator() {
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
    yield '!'
}

function* numGenerator(num = 5) {
    for (let i = 0; i < num; i++) {
        yield i
    }
}

const gen1 = numGenerator(8)
const gen2 = strGenerator()

for (let key of gen2) {
    console.log(key)
}

console.log(gen1.next())
console.log(gen1.next().value)
console.log(gen1.next().value)
console.log(gen1.next().value)
console.log(gen1.next().value)