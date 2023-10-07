function makeNumNegative(num) {
    if (num < 0) {
        return num; //to handle numbers that are already negative
    } else {
        return -num
    }
}
console.log(makeNumNegative(-5)) //output -5