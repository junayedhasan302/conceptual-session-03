// 4. Write a function that takes an array of numbers as a parameter and returns a new array containing only the even numbers.
function evenNumbers(arr) {
    let even = [];

    for (let num of arr) {
        if (num % 2 === 0) {
            even.push(num);
        }
    } return even;
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));