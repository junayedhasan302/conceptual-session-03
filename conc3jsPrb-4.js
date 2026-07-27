// 4. Reverse a given string manually using a for loop (without using split/reverse/join).
let str = "JavaScript";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

console.log(reverse);