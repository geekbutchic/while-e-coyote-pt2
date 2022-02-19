const prompt = require("prompt-sync")({ sigint: true });

let x = prompt('Enter a num for X: ');
let y = prompt('Enter a num for Y: ');

while (x % y !== 0) {
    x++
}

console.log(`${x} is divisible by ${y}`);