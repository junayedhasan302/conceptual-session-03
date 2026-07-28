// 6. Write a function that takes an array of numbers and returns an object containing:
// - sum
// - average
// - largest number
// - smallest number
//
// Example:
// Input: [10, 20, 30, 40]
// Output:
// {
//     sum: 100,
//     average: 25,
//     largest: 40,
//     smallest: 10
// }
function arrayInfo(arr) {
    let sum = 0;
    let largest = arr[0];
    let smallest = arr[0];

    for (let num of arr) {
        sum += num;
        if (num > largest) {
            largest = num;
        }
        if (num < smallest) {
            smallest = num;
        }
    }
    return {
        sum: sum,
        average: sum / arr.length,
        largest: largest,
        smallest: smallest
    };
}
console.log(arrayInfo([10, 20, 30, 40]));