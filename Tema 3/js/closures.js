"use strict";

function makeCounter(count) {
    return function() {
        return count++;
    };
}

const counter = makeCounter(10);
const counter2 = makeCounter(-10);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter2());
console.log(counter2());
