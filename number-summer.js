const prompt = require('prompt-sync')();

let num = prompt("Enter some numbers (type 'done' when complete): ");

//condition

let total = 0;
while (num !== "done"){
    total = total + parseInt(num);
    num = prompt("> ");
}

console.log('Your total is: ' + total);