//You have been given n array of numbers, return the sum of all the positive integers
function positiveSum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num > 0) {
            sum = sum + num;
        }
    }
    return sum;
}
console.log(positiveSum([0, 1, -2, 4, 5]));