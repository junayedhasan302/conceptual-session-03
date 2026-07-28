// 1. Write a function that takes an array of numbers and returns the second largest number without using sort().
function secondLargest(arr) {
    let largest = arr[0];
    let second = arr[0];

    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num != largest) {
            second = num;
        }
    }

    return second;
}

console.log(secondLargest([12, 45, 67, 23, 89, 54]));