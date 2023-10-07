function greet (name, surname) {
    if (name === 'Johny') {
        return 'Hello, My love!';
    } else {
        //return 'Hello' + {name} + '!';
        return `Hello ${name} ${surname} !`
    }
}
console.log(greet('reggy', 'shicky'));