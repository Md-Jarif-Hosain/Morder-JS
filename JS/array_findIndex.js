var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = numbers.findIndex((value, index, arr) => {
    return value > 6;
});
console.log(result);// if return -1 ,that's mean the value is missing