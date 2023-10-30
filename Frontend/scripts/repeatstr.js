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

//alternative
//simply do this
//Syntax : string.repeat(count)
str.repeat(numberOfRepeats);
"https://www.w3schools.com/jsref/jsref_repeat.asp#:~:text=The%20repeat()%20method%20returns,not%20change%20the%20original%20string."