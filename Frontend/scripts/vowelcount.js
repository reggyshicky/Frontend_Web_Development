function getCount(str) {
    let count = 0;
    const arr = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < str.length; i++) {
        if (arr.includes(str[i])) {
            count++;
        }
        
    }
    return count
}
console.log(getCount('abiou'))