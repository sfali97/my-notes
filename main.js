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


// function difficulty(input) {
//     switch (input) {
//         case 1:
//             return "Easy";
//         case 2:
//             return "Medium";
//         case 3:
//             return "Hard";
//         default:
//             return "Error";
//     }
// }

// // Test cases
// console.log(difficulty(1)); // Output: "Easy"
// console.log(difficulty(2)); // Output: "Medium"
// console.log(difficulty(3)); // Output: "Hard"
// console.log(difficulty(0)); // Output: "Error"
// console.log(difficulty(4)); // Output: "Error"

let nums = [10, 6, 22, -7, 3];

// Calling and logging the results of each function to find the highest number
console.log("Highest for-of loop: " + highestForOfLoop(nums));
console.log("Highest for loop: " + highestForLoop(nums));
console.log("Highest while loop: " + highestWhileLoop(nums));
console.log("Highest do-while loop: " + highestDoWhileLoop(nums));

// Function using for-of loop to find the highest number
function highestForOfLoop(nums) {
    let highest = nums[0]; // Initialize highest with the first element of the array
    // Iterate through each number in the nums array
    for (const num of nums) {
        // If the current number is greater than the current highest, update highest
        if (num > highest) {
            highest = num;
        }
    }
    return highest; // Return the highest number found
}

// Function using traditional for loop to find the highest number
function highestForLoop(nums) {
    let highest = nums[0]; // Initialize highest with the first element of the array
    // Use a for loop to iterate through the array elements by index
    for (let i = 0; i < nums.length; i++) {
        // If the current element is greater than the current highest, update highest
        if (nums[i] > highest) {
            highest = nums[i];
        }
    }
    return highest; // Return the highest number found
}

// Function using while loop to find the highest number
function highestWhileLoop(nums) {
    let highest = nums[0]; // Initialize highest with the first element of the array
    let i = 0; // Start with the first index
    // Use a while loop to iterate through the array until the end
    while (i < nums.length) {
        // If the current element is greater than the current highest, update highest
        if (nums[i] > highest) {
            highest = nums[i];
        }
        i++; // Increment the index
    }
    return highest; // Return the highest number found
}

// Function using do-while loop to find the highest number
function highestDoWhileLoop(nums) {
    let highest = nums[0]; // Initialize highest with the first element of the array
    let i = 0; // Start with the first index
    do {
        // If the current element is greater than the current highest, update highest
        if (nums[i] > highest) {
            highest = nums[i];
        }
        i++; // Increment the index
    } while (i < nums.length); // Continue looping until it reaches the end of the array
    return highest; // Return the highest number found
}

