"use strict";
const arrayOfNumbers = [1, 1, 2, 3, 5];
const arrayOfStrings = ['Hi', 'Den'];
function reverse(array) {
    console.log(array);
    return array.reverse();
}
reverse(arrayOfStrings);
reverse(arrayOfNumbers);
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000);
});
promise.then(data => {
    console.log(data.trim());
});
function mergeObject(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObject({ name: 'Den' }, { age: '20' });
function withCount(value) {
    return {
        value,
        count: `In this object length is ${value.length}`
    };
}
console.log(withCount('Hi, typescript'));
function getObjectValue(obj, key) {
    return obj[key];
}
console.log(getObjectValue({
    name: 'Den',
    age: 20
}, 'age'));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'am', 'strings']);
strings.add('!');
strings.remove('am');
console.log(strings.items);
