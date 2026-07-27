// 8. Given a sentence (string), count and print how many times a specific character appears in it.
let sentence = "JavaScript is awesome";
let ch = "a";

let count = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ch) {
        count++;
    }
}

console.log("'" + ch + "' appears", count, "times.");