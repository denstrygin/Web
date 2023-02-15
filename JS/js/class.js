//super + наследование
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        if (this.name != undefined) console.log(`Привет, ${this.name}!`);
    }
    get name() {
        return this._name
    }
    set name(name) {
        if (name.length < 3) {
            console.log(`${name} слишком короткое!`)
            return 
        }
        this._name = name
    }
}

class Programmer extends Person {
    concentration = 0;
    constructor(name, age, language) {
        super(name, age);
        this.language = language;
    }
    sayHello() {
        console.log(`${this.name}, привет!`)
    }
    say() {
        this.sayHello()
        super.sayHello()
    }
}

const proger = new Programmer('Den', '20', 'JS')
proger.say()

//Static
class Car {
    static pi = 3.14
    constructor(road, name) {
        this.road = road
        this.name = name
    }

    static difference(car1, car2) {
        return (car1.road - car2.road) * Car.pi
    }
}

const car1 = new Car(100, 'Porsh')
const car2 = new Car(50, 'shcoda')
console.log(Car.difference(car1, car2))
console.log(Car.pi)
console.log(car1.pi) //undefined - так как static не доступен из объекта

//hasOwnProperty

console.log(Object.keys(proger))
for (const i in proger) {
    console.log(i)
}