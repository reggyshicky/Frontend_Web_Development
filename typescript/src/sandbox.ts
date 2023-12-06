
let home: String;
let isHome: Boolean;
let num: number;

let mixed: (String|Number|boolean)[] = [];
mixed.push("hello");
mixed.push(5);
mixed.push(true);
console.log(mixed);

let uid: string|number|boolean;
uid = '123';
uid = 123;

let myObject: object;
myObject = {
    name: "reggy",
    num: 50
}

let best: any;
best = 50;
best = "home";

let arr: any[];
let obj: {name: any, home: any};

obj = {
    name: 38,
    home: 90
}
console.log(obj)
