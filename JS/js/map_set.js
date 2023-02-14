//Map
let map = new Map()
key_object1 = {
    key: "key"
}
key_object2 = {
    key2: "key2"
}

map.set("key1", 1)
    .set(key_object1, 2)
    .set(key_object2, 3)
    .set(4, 4)

console.log(map.get(key_object1))
console.log(map.get(4))
console.log(map.has(key_object2))
console.log(map.size)

console.log(map.keys())
console.log(map.entries())
for (let i of map.entries()) {
    for (let j of i) {
        console.log(j)
    }
}

const map2 = new Map([
    ['key1', 1],
    ['key2', 2],
    ['key3', 3]
])
console.log(map2)

const obj = {
    'name': 'Denis',
    'age': 20
}

const map3 = new Map(Object.entries(obj))
console.log(map3)

const obj2 = Object.fromEntries(map.entries())
console.log(obj2)

//Set
const set = new Set()

const object1 = {name: 'Denis', age: 20}
const object2 = {name: 'Vika', age: 21}
const object3 = {name: 'Dima', age: 22}
const object4 = {name: 'Rick', age: 54}

set.add(object1)
    .add(object2)
    .add(object3)
    .add(object1)
    .add(object4)
    .add(object1)
console.log(set)
console.log(set.size)

set.forEach(value => console.log(value))

//WeakMap and WeakSet (take only object as key and have only four methods: get, set, delete, has)
const weakmap = new WeakMap()
weakmap.set({'key1': 1}, 1).set({'key2': 2}, 2).set({'key3': 3}, 3)
console.log(weakmap.get({'key2': 2}))