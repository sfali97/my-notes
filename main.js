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
// let originalString = " JavaScript Fundamentals ";

// // 1. Remove leading and trailing whitespaces
// let trimmedString = originalString.trim();
// console.log("Trimmed String:", trimmedString);

// // 2. Convert the entire string to uppercase
// let upperCaseString = trimmedString.toUpperCase();
// console.log("Uppercase String:", upperCaseString);

// // 3. Replace the word "Fundamentals" with "Basics"
// let replacedString = upperCaseString.replace("FUNDAMENTALS", "BASICS");
// console.log("Replaced String:", replacedString);

// // 4. Find the position of the word "JavaScript" in the string
// let position = trimmedString.indexOf("JavaScript");
// console.log("Position of 'JavaScript':", position);

// let arr = [1, 5, 2, 6, 3, 7, 4, 8];
// let sum = 0;

// // Iterate through the array and add even numbers to sum
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//     }
// }

// console.log(sum); // Output: 20

// function isDivisibleBy3Or4(num) {
//     return (num % 3 === 0 || num % 4 === 0);
// }

// // Example usage:
// console.log(isDivisibleBy3Or4(9));  // true, because 9 is divisible by 3
// console.log(isDivisibleBy3Or4(8));  // true, because 8 is divisible by 4
// console.log(isDivisibleBy3Or4(10)); // false, because 10 is divisible by neither
// console.log(isDivisibleBy3Or4(12)); // true, because 12 is divisible by both 3 and 4

// function grade(mark){
//     let result = (mark < 0 || mark >100) ? "invalid argument":
//     mark >= 40 ? "Pass" : "Fail";
//     return result;
// }
 
// console.log(grade(-40));
// console.log(grade(40));
// console.log(grade(30));
// console.log(grade(10));


function difficulty(input) {
    switch (input) {
        case 1:
            return "Easy";
        case 2:
            return "Medium";
        case 3:
            return "Hard";
        default:
            return "Error";
    }
}

// Test cases
console.log(difficulty(1)); // Output: "Easy"
console.log(difficulty(2)); // Output: "Medium"
console.log(difficulty(3)); // Output: "Hard"
console.log(difficulty(0)); // Output: "Error"
console.log(difficulty(4)); // Output: "Error"