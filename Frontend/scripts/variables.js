let vari = '50';



console.log(typeof(vari));
let vari2 = parseInt(vari);
console.log(typeof(vari2));

//format 1
function myfunction() {
    console.log("Hello World");
}

myfunction();

//format 2
const arrowFunction = () => {
    console.log("This is an arrow function");
}
arrowFunction();

//format 3
const functionVariable = function() {
    console.log("Variable function");
}
functionVariable();