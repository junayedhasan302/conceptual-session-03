// 5. Write a function that takes a sentence and returns the longest word.
// Example:
// "JavaScript is very powerful"
// Output: "JavaScript"
function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    } return longest;
}
console.log(longestWord("JavaScript is very powerful"));