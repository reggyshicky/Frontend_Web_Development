//how to reverse a string, we first need to convert a string into an array by letter
//and then we need to reverse it and then we need to join it back into a string
const arr = [1, 2, 3];
const newarr = arr.reverse();
console.log(newarr); //output [ 3, 2, 1 ]
const st_r = "hello"; 
const newstr = st_r.split("")  
console.log(newstr); //output [ 'h', 'e', 'l', 'l', 'o' ]

function reversearray (str) {
    const newstr = str.split("").reverse().join("");
    return newstr;
    // const newstr = str.split("");
    // const reversed = newstr.reverse();
    // console.log(reversed)
    // final_answer = reversed.join("");
    // console.log(final_answer)
}
console.log(reversearray('Reginah'))