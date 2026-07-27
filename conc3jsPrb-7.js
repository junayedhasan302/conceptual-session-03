// 7. Write a program that loops through an object representing a person's details using a for...in loop and prints each key
// alongside its value.

let person = {
    name: "Junayed",
    age: 24,
    city: "Dhaka"
};

for (let key in person) {
    console.log(key + ":", person[key]);
}