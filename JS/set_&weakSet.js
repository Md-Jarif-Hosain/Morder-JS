function log(anything) {
    return console.log(anything);
};
// Sets 
let mySet = new Set();//Set area always created with new keyword, and carry all unique value
// Set methods
mySet.add("bangladesh").add(5).add(6).add(7);
//log(mySet.size);
//log(mySet.has("bangladesh"));
//log(mySet);

let myArray = [1, 2, 3, 4, 5, 6];
let set2 = new Set(myArray);
// log(set2);
for (let values of set2) {
    //log(values);
};
// log([...mySet]);//convert set to array

// usage of Set
let newArray = ["Jarif", "rafi", "sifat", 'rony', "Jarif", "Jarif", "Jarif", 1, 1, 1, 4, 4, 4, 4,];
function duplicateRemover(arr) {
    return [...new Set(arr)];
};
// log(duplicateRemover(newArray));

// union of 2 Sets
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

let union = new Set([...a, ...b]);
// log(union)

// interSection of 2 Sets

let interSection = new Set([...a].filter(x => b.has(x)));
// log(interSection)

// difference of 2 Sets
let difference = new Set([...a].filter(x => !b.has(x)));
// log(difference);




// ******************** WeakSet ************************

const ws = new WeakSet([{ a: 1 }, { b: 2 }]); //element can be Object only, and it's not iterable.
log(ws);

// usage of weakSet 
const ws2 = new WeakSet();

class SomeClass {
    constructor() {
        ws2.add(this);
    }
    method() {
        if (!ws2.has(this)) {
            throw new Error("You cannot access this method directly")
        }
        return "I'm method"
    }
}
const j = new SomeClass();
log(j.method())//traditional way

// log(SomeClass.prototype.method());//use prototype tp access method of a Class.