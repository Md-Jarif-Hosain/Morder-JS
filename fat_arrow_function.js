let number1 = () => {
    return 10;
}
// number1(6);
let number = n =>  n + n;
// console.log(number(5));

let number2 = (n) =>  console.log(n);
// number2(6);

// Example
// Before arrow function 
var javascript = {
    name: 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function(){
        this.libraries.forEach(function(a){
            console.log(`${javascript.name} loves ${a}`);
        });
    },
};
// javascript.printLibraries();


// After arrow function
var javascript2 = {
    name: 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function(){

        // this = {javascript}

        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    },
};
// javascript2.printLibraries();




const searchInput = document.querySelector(".search");

const display = document.querySelector(".result");


const thanks = document.querySelector(".thanks");


//Arrow function in normal function 
function show() {
    display.innerHTML = this.value;
    var self = this;
    setTimeout(() => {
        thanks.innerHTML = `You have typed: ${self.value}`;
    }, 1000);
};
searchInput.addEventListener("keyup", show);