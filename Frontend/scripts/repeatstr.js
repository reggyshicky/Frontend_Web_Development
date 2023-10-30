//Write a function called which repears the given string exactly count times
// n is the count, s is the string i.e repeatStr(3, j) 'jjjjj'
function repeatStr(numberOfRepeats, str) {
    let starterString = '';
    for (let i = 0; i < numberOfRepeats; i++) {
        starterString = starterString + str
    }
    return starterString;
}
console.log(repeatStr(4, "Reginah"));