//create a function that removes the first and last characters of a string
//you do not have to worory with strings with less than two characters
//Syntax: Syntax str.slice(start, end)
//slice() method returns selected elemetns in an array, as a new array. The slice() method selects from a given start, upto a (not inclusive) given end
//the slice() method does nit change the original array
function removeChar(str) {
    let newstr = str.slice(1, str.length - 1); //or str.slice(1, -1)
    return newstr
}
console.log(removeChar("Reginah"));