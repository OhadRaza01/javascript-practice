// map : for transforming our array

// 1) a new array with squared values

const arr = [1, 2, 3, 4, 5]
console.log(arr.map(e => e ** 2))

// 2) first letter of each string.
const arr2 = ["Ali", "Bilal", "Hassan"]
console.log(arr2.map(e => e[0]));

// 3) extract ages from array of objects
const arr3 = [
    { name: "Ali", age: 20 },
    { name: "Bilal", age: 22 },
    { name: "Hassan", age: 25 }
]
console.log(arr3.map(e => e.age))


/*4) student Grade transformation
Marks < 40 → Fail
40–59 → C
60–79 → B
80–89 → A
90+ → A+*/

const students = [
    { name: "Ali", marks: 45 },
    { name: "Bilal", marks: 72 },
    { name: "Hassan", marks: 88 },
    { name: "Ahmed", marks: 95 },
    { name: "Usman", marks: 33 }
];

const gradelist = students.map((std) => {
    if (std.marks >= 90) return {name :std.name , grades : "A+"}
    else if (std.marks >= 80) return {name : std.name , grades : "A"}
    else if (std.marks >= 60) return {name :std.name, grades : "B"}
    else if (std.marks >= 40) return {name :std.name, grades : "C"}
    else return {name : std.name , grades :"Fail"}
})

console.log(gradelist);