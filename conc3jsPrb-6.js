// 6. Given an object, use the delete operator to remove one of its properties and print the object before and after deletion.

let student = {
    name: "Junayed",
    age: 24,
    department: "CSE"
};

console.log("Before:", student);

delete student.age;

console.log("After:", student);