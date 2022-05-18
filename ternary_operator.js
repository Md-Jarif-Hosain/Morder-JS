var age = 7;

var type;


// Traditional if else statement 
// if (age => 18) {
//     type = 'adult';
// }else{
//     type = 'child';
// }



// ternary operator & nesting condition
type = (age >= 18) ? "adult"
    : (age <= 10)
        ? "child"
        : (age <= 8)
            ? "young"
            : "baby";

console.log(type);

var isLogging = true;

var access = isLogging? true:false;

console.log(access);


var a = 5;
var output = a < 5;
console.log(output);
