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


//alternative
function getCount1(str) {
    let vowelsCount = 0;

    const arr = str.split(""); //splits the string into an array of characters

    for (i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 'a':
                vowelsCount++;
                break;
            case 'e':
                vowelsCount++;
                break;
            case 'i':
                vowelsCount++;
                break;
            case 'o':
                vowelsCount;
                break;
            case 'u':
                vowelsCount++;
                break;
        }
    }
    return vowelsCount;

}
console.log(getCount1("aeioufssjdkxvnmedfb"))