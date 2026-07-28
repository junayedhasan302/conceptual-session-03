// 2. Write a function that takes a string and returns true if it is a palindrome; otherwise, return false.
// Example: "madam" → true, "hello" → false
function isPalindrome(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return str === reverse;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));