var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = numbers.reduce((prevValue, currentValue, currentIndex, array) => {
    return prevValue + currentValue;
}, 0);

console.log(result);