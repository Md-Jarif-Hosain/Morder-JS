// globalThis.setTimeout(() => console.log("hlw"), 100);


// *********** before ES11 *********************

// If we want to access global obj on browser or server =>
// problem 1
var setGlobal = function () {
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};
var myGlobal = setGlobal();
// myGlobal.setTimeout(() => console.log("hlw"), 100);
// problem 2
const language = {
    name: 'JavaScript',
    creator: 'Brendan Eich',
    libraries: {
        react: {
            company: "Facebook",
        },
        angular: {
            company: "Google",
        },
    },
}
//IF we want check a property of this object, then we have to run a loop or something else lengthy process like=>
let company = language && language.libraries && language.libraries.react && language.libraries.react.company;
// console.log(company);

// problem 3 : Nullish vs OR operator
let a;
a = false;
// console.log(a ?? "Jarif");
// console.log(a || "Jarif");


// problem 4 :
// Dynamically Import 

// IF we want to import an JS file as a module, then we have to use webpack or something else .








//  ****************** After ES11 ******************

// =============== solution 1: ======================
globalThis.setTimeout(() => console.log('hlw'), 100)

// =============== solution 2: ======================
// but After ES11, we don't need to run a lengthy process, we just simply use 'Optional chaining' =>
let solution_company = language?.libraries?.react?.company;
// console.log(solution_company);
// example for array 
let colors = ["red", "green", "blue"];
// console.log(colors?.[1])



// ============= Another feature: ====================
// Nullish Coalescing operator & Nullish Coalescing vs Logical OR operator : 

console.log(a ?? "Jarif");// It's return right side value when left value is undefined or null.

console.log(a || "Jarif");// It's return right side value when left value is a falsy value.


// example for object 
console.log((name.firstName || name.lastName) ?? 'anonymous')


    // ============= Another feature: ====================
    //but now ,we just have to write @ lines of code .
    (async function () {
        const { add } = await import('./tagedTemplate.js');
        const { remove } = await import('./set_&_weakSet');
        add();
        remove();
    })();