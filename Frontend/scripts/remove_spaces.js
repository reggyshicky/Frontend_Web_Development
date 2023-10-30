//remove the spaces from the string then return the resultant string
function noSpace(str) {
    //Split the string into array of words
    let arr = str.split(" ");
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        const trimmedString = arr[i].trim();
        newArray.push(trimmedString);
    }
    const finalString = newArray.join("")
    return finalString;
}
console.log(noSpace("i love avocado"));