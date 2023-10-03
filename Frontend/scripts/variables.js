let vari = '50';



console.log(typeof(vari));
let vari2 = parseInt(vari);
console.log(typeof(vari2));

//format 1
function myfunction() {
    console.log("Hello World");
}

myfunction();

//format 2 Arro function
const arrowFunction = () => {
    console.log("This is an arrow function");
}
arrowFunction();

//format 3 Anonymous function
const functionVariable = function() {
    console.log("Variable function");
}
functionVariable();

const mystring = 'Javascript language';
newstring = mystring.replace('v', 'b');
console.log(newstring);

upperstring = mystring.toUpperCase().split(" ");
console.log(upperstring);
result = upperstring.indexOf('LANGUAGE');
console.log(result);
// In JavaScript, the split() method is used to split a string into an array of substrings based on a specified 
// separator. The split() method takes one or two arguments:
// Separator (Required): The separator is a string or a regular expression that specifies where the original 
// string should be split. This is the only required argument. The split() method splits the string into an 
// array of substrings wherever the separator is found. If the separator is an empty string (""), the string is 
// split into an array of individual characters.