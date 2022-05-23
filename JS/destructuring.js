// object destructuring
var obj = {
    id: 101,
    name: 'sakib',
    age: 35,
    education: {
        degree: 'Masters'
    },
};

const { name: title } = obj;
// console.log(title);

const { education: { degree: certificate } = {} } = obj;//use default value to avoid error
// console.log(certificate);


// array destructuring
var numbers = [1, 2, [100, 500, 600], 3, 4, 5];
const [, a, , , b] = numbers;
// console.log(a, b);

const [,, [, x,,],y] = numbers;
// console.log(x, y);


// example of swap values
export var j = 1;
var r = 2;
export default r;
 [r, j] = [j, r];
// console.log(j, r)

// function export 
export function my() {
    console.log("im func");
}