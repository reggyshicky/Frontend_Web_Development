//Given an array of integers your solution should find the smallest integer.
//Find the minimum and maximum integers in an array
function MaxMinInteger (ArrayOfNums) {
    let max_int = Math.max(...ArrayOfNums);
    let min_int = Math.min(...ArrayOfNums);
    return `${min_int} & ${max_int}`; 
}

console.log(MaxMinInteger([5, 10, 1, 0, 90]))
//The destructuring assignment syntax is a JavaScript expression that makes it possible to 
//extract data from arrays or objects into distinct variables.
// const nums = [1, 2, 3]
// Math.min(...nums)    // 1
// Math.max(...nums)    // 3
// … in front of an array will convert array to distinct variables and send them to the function, 
// which is equivalent to

// Math.min(1, 2, 3)
// Math.max(1, 2, 3)