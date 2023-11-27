let myArray = ["BMW", "Mercedes", "Audi"];
let text = "";
for (car of myArray) {
    text += car + " ";
}
console.log(text);

//looping over a string
let myString = "JavaScript"
let newText = "";
for (letter of myString) {
    newText += letter + "/";
}
console.log(newText);
