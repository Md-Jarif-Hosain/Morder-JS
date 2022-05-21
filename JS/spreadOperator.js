// Array spreading
var numbers1 = [1, 2, 3];
var numbers2 = [4, 5, 6, 7];
var numbers = [...numbers1, ...numbers2];
var a = [...numbers];//exact copy of pre-defined 'numbers' array

var newNum = [...numbers, 4, 5, 6];

// numbers1.push(4);
// console.log(numbers1);
// console.log(numbers);
// console.log(a);
// console.log(newNum);



// Object spreading
var myObj = {
    a: 1,
    b: 2,
    c: 3,
};
var myObj2 = {
    d: 4,
    e: 5,
    f: 6,
};
var obj = {
    ...myObj,
    ...myObj2
};
console.log(obj);