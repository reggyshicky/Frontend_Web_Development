//get the sum of numbers from 1 to num
function GetSum_1_num (num) {
    sum = 0;
    for (i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(GetSum_1_num(3))