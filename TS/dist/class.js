"use strict";
class Typescript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}
class Car {
    constructor(model) {
        this.model = model;
        this.numberOfWheels = 4;
        this.model = model;
    }
}
class Animal {
    constructor() {
        this.voice = '';
        this.color = 'black';
    }
    go() {
        console.log('Go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
const animal = new Animal();
class Component {
}
class AppComponent extends Component {
    render() {
        console.log('Componennt on render');
    }
    info() {
        return 'Info';
    }
}
