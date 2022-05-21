const myObj = {
    name: 'JavaScript',
    estd: '1995',
    founder: 'Brendan Eich'
};

// forIn loop with object
for(property in myObj){
    console.log(property);
};

// forIn & forIN loop with Array
const myArray = [1, 2, 3, 4, 5];
for(elem of myArray){
    console.log(elem)
}
for(index in myArray){
    console.log(index);
};