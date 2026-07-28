// 3. Write a function that takes an array of numbers and removes all duplicate values.
// Example: [1, 2, 2, 3, 4, 4, 5] → [1, 2, 3, 4, 5]
function removeDuplicates(arr) {
    let unique = [];
    for (let num of arr) {
        if (!unique.includes(num)) {
            unique.push(num);
        }
    } return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));