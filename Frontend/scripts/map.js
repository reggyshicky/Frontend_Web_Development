//Given an array of integers. return a new array with each value value doubled
//For the beginner. try to use the map method 
function maps(arr) {
    const doubleArray = arr.map(function (value) {
        return value * 2;
    });

    return doubleArray;
}
console.log(maps([1, 2, 3, 4, 5]));
