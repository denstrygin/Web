"use strict";
const rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
rect1.color = 'red';
const rect3 = {};
const rect4 = {};
const rect5 = {
    id: "12345",
    size: {
        width: 30,
        height: 20
    },
    getArea() {
        return this.size.width * this.size.height;
    },
};
class Clock {
    constructor() {
        this.date = new Date();
    }
    setTime(date) {
        this.date = date;
    }
}
const css = {
    border: "1px"
};
