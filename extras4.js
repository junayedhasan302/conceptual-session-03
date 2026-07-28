// 4. Write a function that takes a student's marks object and returns the subject with the highest marks.
// Example:
// {
//     math: 90,
//     science: 85,
//     english: 95
// }
// Output: "english"

function highestSubject(marks) {
    let highest = 0;
    let subject = "";
    for (let key in marks) {
        if (marks[key] > highest) {
            highest = marks[key];
            subject = key;
        }
    } return subject;
}
let marks = {
    math: 90,
    science: 85,
    english: 95
};
console.log(highestSubject(marks));