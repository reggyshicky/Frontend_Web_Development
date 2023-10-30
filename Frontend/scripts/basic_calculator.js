//your task is to create a function that does four basic mathematical operations
//The function should take 3 arguments - operation(string/char). value1(number), value2(number)
//The function should return result of the numbers after applying the chosen operations

function basicOp(operation, value1, value2) {
    if (operation === "+") {
        return value1 + value2;
    } else if (operation === "-") {
        return value1 - value2;
    } else if (operation === "*") {
        return value1 * value2;
    } else {
        return value1 / value2;
    }
}

console.log(basicOp("+", 5, 10));
console.log(basicOp("-", 10, 5));
console.log(basicOp("*", 5, 10));
console.log(basicOp("/", 10, 5));

//alternative using eval()
function basicOperation(operation, value1, value2) {
    const operationString = value1 + operation + value2;
    const result = eval(operationString);
    return result
}
console.log(basicOperation("+", 10, 40));