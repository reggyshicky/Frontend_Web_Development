function arrayPlusArray(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
        sum2 += arr2[j]
    }
    totalSum = sum1 + sum2;
    return totalSum
}
console.log(arrayPlusArray([1, 1, 1 , 1], [1, 1, 1, 1, 1]))
