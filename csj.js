// FIZZBUZZ CHALLANGE

// // Loop through numbers from 1 to 100
// for (let num = 1; num <= 100; num++) {
//     // Check if the number is divisible by both 3 and 5
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("FizzBuzz"); // Print "FizzBuzz" for multiples of both
//     } 
//     // Check if the number is divisible by 3
//     else if (num % 3 === 0) {
//         console.log("Fizz"); // Print "Fizz" for multiples of 3
//     } 
//     // Check if the number is divisible by 5
//     else if (num % 5 === 0) {
//         console.log("Buzz"); // Print "Buzz" for multiples of 5
//     } 
//     // If the number is not divisible by 3 or 5, print the number itself
//     else {
//         console.log(num);
//     }
// }


//Palindrome Checker

// function isPalindrome(str) {
//     // Convert the string to lowercase
//     const lowerStr = str.toLowerCase();
    
//     // Reverse the string by splitting it into an array, reversing it, and joining it back
//     const reversedStr = lowerStr.split('').reverse().join('');
    
//     // Check if the original string is the same as the reversed string
//     return lowerStr === reversedStr;  // Return true or false
// }

// // Example inputs
// console.log(isPalindrome("madam"));  // Output: true
// console.log(isPalindrome("hello"));  // Output: false
// console.log(isPalindrome("Racecar")); // Output: true


// Random Number Game
function startGuessingGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    let guess;

    while (guess !== randomNumber) {
        guess = parseInt(prompt("Guess a number between 1 and 10:"));

        if (guess < randomNumber) {
            alert("Too low! Try again.");
        } else if (guess > randomNumber) {
            alert("Too high! Try again.");
        } else {
            alert("Congratulations! You guessed it!");
        }
    }
}

startGuessingGame();