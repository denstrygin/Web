const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hi', 'Den']

function reverse<T>(array: T[]): T[] {
    console.log(array)
    return array.reverse()
}

reverse(arrayOfStrings)
reverse(arrayOfNumbers)

const promise = new Promise<string>(resolve => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 2000)
})

promise.then(data => {
    console.log(data.trim())
})

function mergeObject<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObject({name: 'Den'}, {age: '20'})

interface ILength {
    length: number
}

function withCount<TL extends ILength>(value: TL): {value: TL, count: string} {
    return {
        value,
        count: `In this object length is ${value.length}`
    }
}

console.log(withCount('Hi, typescript'))

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

console.log(getObjectValue({
    name: 'Den',
    age: 20
}, 'age'))

class Collection<T> {
    constructor(private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item)
    }
    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }
    get items(): T[] {
        return this._items
    }
}

const strings = new Collection<string>(['I', 'am', 'strings'])
strings.add('!')
strings.remove('am')
console.log(strings.items)

interface Car {
    modelOfCar: string
    year: number
}

function createAndValidateCar(modelOfCar: string, year: number): Car {
    const car: Partial<Car> = {}
    if (modelOfCar.length > 3) {
        car.modelOfCar = modelOfCar
    }
    if (year > 3000) {
        car.year = year
    }
    return car as Car
}

const cars: Readonly<Array<string>> = ['Ford', 'Audi']
//cars.shift()

const ford: Readonly<Car> = {
    modelOfCar: 'Ford',
    year: 2020,
    numberOfWheels: 0,
    model: ""
}

//ford.modelOfCar = 'Ferrari'