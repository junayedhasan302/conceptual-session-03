// 7. Write a function that takes an array of numbers as a parameter and returns a new array containing only the numbers greater than 10.
function greaterThanTen(arr) {
    let result = [];
    for (let num of arr) {
        if (num > 10) {
            result.push(num);
        }
    } return result;
}

console.log(greaterThanTen([5, 12, 8, 20, 15, 3]));