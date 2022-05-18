Array.prototype.find()
var numbers = [1, 2, 3, 4, 5, 6];

var result = numbers.find((currentValue) => currentValue > 4);

// console.log(result);



// Example
class Students {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    test(){
        console.log('hello');
    }
    exampleFunction(){
        let array = [1, 2, 3];
        array.find(() => {
            this.test();
        });// need "this" keyword in traditional function
    }
};
let student = new Students("sumit", 35);
// student.exampleFunction();