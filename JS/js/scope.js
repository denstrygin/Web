//замыкание

const scope = () => {
    let count = 4
    return (step = 1) => {
        count += step
        return count
    }
}

const iter = scope()
const iter2 = scope()

console.log(iter(), iter2(2), iter(), iter2(2), iter(), iter2(2), iter())

//Отличие стрелочных от деклоратион

//1.this

function func() {
    console.log(this)
}

const afunc = () => {
    console.log(this) // вернёт пустой объект
}

func()
afunc()

new func()
// new afunc() - преведёт к ошибке

//2.arguments (у стрелочных этот псевдомассив берётся из контекста this)

function test() {
    console.log(arguments)
}

const test2 = () => {
    console.log(arguments)
}

test(1, 2, 3, 4, 5)

function addThis(value) {
    console.log(`${value}: ${this}`)
}

const aAddThis = (value) => {
    console.log(`${value}: ${this}`)
}

addThis.call("десять", "Значение")
aAddThis("десять", "Значение");

//var обладает только глобальной либо функциональной областью виддимости
function varik() {
    console.log(a)
}

(function () {
    var a = 10;
    varik()
})();