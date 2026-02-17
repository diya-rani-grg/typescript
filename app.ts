// Type Inference
let x = 78;
x = 90;
// x = "Diya"; Error

let money;

let val: unknown;
val = 90;
if(typeof val === "string") 
    console.log(val.toLowerCase());

// Non Primitive

let arr:number[] = [90, 65, 54, 32, 78];

let arr2 = [1, 2, 3, 4, 5];

let arr3: (string|number)[] = [8, 65, "XYZ", "YUTR", 85];
// arr3.push(true); error

// Tuple

let tuples:[string, number, boolean] = ["XYZ", 78, true];

// Object
//Inline

let obj: {name: string, age: number, gender: string} = {
    name: "Diya",
    age: 20,
    gender: "female"
}

// OR

// let obj1 = {
//     name: "Diya",
//     age: 20,
//     gender: "female"
// }


// Another way for creating objects
let person: { name: string; age: number; isStudent: boolean };

person = {
    name: "rohit",
    age:23,
    isStudent: true
}

// Type Allias

type student = {
   names: string,
   age: number
};

let College_student: student = {
    names:"Rohit",
    age: 20
};

let stu: student = {
    names:"Rohit",
    age: 20
}




interface customer {
    name : string,
    account_number: number,
    balance: number,
    age: number 
}

let per: customer = {
    name: "Rohit",
    account_number:230921,
    balance:420,
    age: 12
}