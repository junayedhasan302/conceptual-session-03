// 6. Write a function that takes a string as a parameter and returns the number of vowels found in it.
function countVowels(str) {
    let count = 0;

    for (let ch of str.toLowerCase()) {
        if (
            ch === "a" ||
            ch === "e" ||
            ch === "i" ||
            ch === "o" ||
            ch === "u"
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("abcdefghijklmnopqrstuvwxyz"));