// //console.log("hello World");
// let MyArray= ["JavaScript", "is", "fun"];
// console.log(MyArray);
// MyArray.push("!");
// console.log(MyArray);
// MyArray.pop();
// console.log(MyArray);
// MyArray[1] = "really";
// console.log(MyArray);
// MyArray.shift();
// console.log(MyArray);
// MyArray.unshift("Coding");
// console.log(MyArray);
// MyArray.splice(2, 1, "is");
// console.log(MyArray);
// MyArray.push("awesome");
// console.log(MyArray);



// Original string
let originalString = " JavaScript Fundamentals ";

// 1. Remove leading and trailing whitespaces
let trimmedString = originalString.trim();
console.log("Trimmed String:", trimmedString);

// 2. Convert the entire string to uppercase
let upperCaseString = trimmedString.toUpperCase();
console.log("Uppercase String:", upperCaseString);

// 3. Replace the word "Fundamentals" with "Basics"
let replacedString = upperCaseString.replace("FUNDAMENTALS", "BASICS");
console.log("Replaced String:", replacedString);

// 4. Find the position of the word "JavaScript" in the string
let position = trimmedString.indexOf("JavaScript");
console.log("Position of 'JavaScript':", position);