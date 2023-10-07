function greet (name, surname) {
    if (name === 'Johny') {
        return 'Hello, My love!';
    } else {
        //return 'Hello' + {name} + '!';
        return `Hello ${name} ${surname} !`
    }
}
console.log(greet('reggy', 'shicky'));

//template literals
var x = 5;
var y = 10;
var sum = `The sum of ${x} and ${y} is ${x + y}.`;
console.log(sum); // Output: "The sum of 5 and 10 is 15."