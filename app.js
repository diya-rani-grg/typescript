"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type Inference
let x = 78;
x = 90;
// x = "Diya"; Error
let money;
let val;
val = 90;
if (typeof val === "string")
    console.log(val.toLowerCase());
// Non Primitive
let arr = [90, 65, 54, 32, 78];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = [8, 65, "XYZ", "YUTR", 85];
// arr3.push(true); error
// Tuple
let tuples = ["XYZ", 78, true];
// Object
//Inline
let obj = {
    name: "Diya",
    age: 20,
    gender: "female"
};
// OR
// let obj1 = {
//     name: "Diya",
//     age: 20,
//     gender: "female"
// }
// Another way for creating objects
let person;
person = {
    name: "rohit",
    age: 23,
    isStudent: true
};
let College_student = {
    names: "Rohit",
    age: 20
};
let stu = {
    names: "Rohit",
    age: 20
};
let per = {
    name: "Rohit",
    account_number: 230921,
    balance: 420,
    age: 12
};
//# sourceMappingURL=app.js.map