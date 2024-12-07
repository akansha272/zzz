const a = [1, 2, 3];
const b = [5, 6, 7];
const c = a.concat(b);
console.log("Concat array : ", c);
const d = [a, b];
console.log(d); //[1,2,3],[5,6,7]
const e = [...a, ...b];
console.log(e); //[1,2,3,5,6,7]
//rest operator
function demo(...p) {
    // let a1 = Array.from(b);
    // let a2 = a1.map(x=>x*2);
    let a2 = p.map((x) => x * 2);
    console.log(a2);
}
demo(1, 2);
demo(2, 3, 2);
/////map

let x1 = { ename: "Rainy" },
    x2 = { ename: "sunny" },
    x3 = { ename: "cloudy" };
let weather = new Map([
    ["drops", "cold"],
    ["raincoat", "gumboot"],
]);
// let weather = new Map([['drops', 'raincoat'], ['hot', 'gumboot'], ['cold', 'snowcoat']]);
console.log(weather);

//array map
let arr = [3, 4, 5, 6];
let m = arr.map(function (element) {
    return element * 2;
});
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
}
console.log(arr);

//array of object
let Emp = [
    { fname: "suman", lname: "kale" },
    { fname: "rajat", lname: "pradhan" },
    { fname: "bhushan", lname: "sharma" },
];

let emp1 = Emp.map(function (element) {
    return `${element.fname} ${element.lname}`;
});
console.log(emp1);

//for each method
function itr(value, key, map) {
    console.log(`m[${key}]=${value}`);
}


new Map([['a', 10], ['b', 12], ['x', '13'],]).forEach(itr);


//set
let s = new Set([1, 2, 3, 4, 5, 6, 7]);
console.log("Set :", typeof (s));
console.log("Set :",(s));
console.log("Check 5 is present :", s.has(5));
s.delete(5);
s.add(0);
console.log(s);
for(let p of s){
    console.log(p);
}
console.log(s.size);
