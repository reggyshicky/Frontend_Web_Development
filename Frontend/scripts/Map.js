//you can create a Map by use of new Map()
//A Map holds key value pairs where the keys can be of any data type
//YOu can create a Map by passing an Array to the new Map constructor


//Create A Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["Oranges", 200]
]);
console.log(fruits.get("Oranges"));

//Map.set()
//You can add elemetns to a Map with the set() method:
fruits.set("mangoes", 300);
console.log(fruits.size); //answer is 4
//fruits.delete("apples"); delete() removes a map element
//fruits.clear() removes all the elements from a Map
console.log(fruits.has("apples")); //return true if a key exists in a map
console.log(fruits.size);
console.log(typeof(fruits)) //Maps are objects

//Map.forEach()
//The forEach() method invokes a callback for each key/value pair in a Map
//Example
let text = "";
fruits.forEach (function(value, key) {
    text += key + ' = ' + value
});
console.log(text);

//Map.entries()
//The entries() method returns an iterator object with the [key,values] in a Map
let text1 = "";
for (const x of fruits.entries()) {
    text1 += x + " ";
}
console.log(text1);

//Map.keys()
//The keys() method returns an iterator object with the keys in a Map:
let text2 = ""
for (const v of fruits.keys()) {
    text2 += v;
}
console.log(text2);

//Map.values()
//The values() method returns an iterator object with the values in a Map
let text3 = "";
for (y of fruits.values()) {
    text3 += y;
} 
console.log(text3);

//You can use the values() method to sum the values in a Map
let total = 0;
for (w of fruits.values()) {
    total += w;
}
console.log(total);

//Objects as Keys
///Being able to use ojects as keys is an important Map feature
const beetroot = {name: "beetroot"};
const avocado = {name: "avocado"};
const pineapple = {name: "pineapple"};

//create a Map
const fruitss = new Map()

//Add new elements to the map
fruitss.set(beetroot, 500);
fruitss.set(avocado, 300);
fruits.set(pineapple, 200);
/*Remember the key is an objct (apples), not a string ("apples") */