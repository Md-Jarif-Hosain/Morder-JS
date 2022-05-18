var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = numbers.filter((value, index, arr)=>{
    return value > 4;
});
console.log(result);