
//Is n divisible by x and y?
function divisible(n, x, y) {
    if (n % x === 0 && y % y === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(divisible(6, 3, 2)) //output is true