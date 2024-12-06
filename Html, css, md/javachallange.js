// Function to process an array of strings
function processStrings(arr) {
    // Arrays to hold modified strings
    let reversedStrings = []; // For strings with even length (reversed)
    let uppercaseStrings = []; // For strings with odd length (uppercase)

    // Iterate over the input array
    for (let str of arr) {
        // Check if the string length is even or odd
        if (str.length % 2 === 0) {
            // If length is even, reverse the string
            let reversed = str.split('').reverse().join(''); // Reverse the string
            reversedStrings.push(reversed); // Add reversed string to the array
        } else {
            // If length is odd, convert the string to uppercase
            let uppercase = str.toUpperCase(); // Convert to uppercase
            uppercaseStrings.push(uppercase); // Add uppercase string to the array
        }
    }

    // Calculate total characters in reversedStrings array
    let totalReversedChars = reversedStrings.reduce((acc, cur) => acc + cur.length, 0);
    // Calculate total characters in uppercaseStrings array
    let totalUppercaseChars = uppercaseStrings.reduce((acc, cur) => acc + cur.length, 0);

    // Compare totals to determine which array has more characters
    let moreCharactersArray = totalReversedChars > totalUppercaseChars ? reversedStrings : uppercaseStrings;

    // Return the results in an object
    return {
        reversed: reversedStrings,        // Array of reversed strings
        uppercase: uppercaseStrings,      // Array of uppercase strings
        moreCharactersArray: moreCharactersArray // Array with more total characters
    };
}

// Testing the function with different arrays of strings

// Test Case 1: Mixed lengths
const testCase1 = ['hello', 'world', 'javascript', 'is', 'fun'];
console.log("Test Case 1 Result:", processStrings(testCase1));

// Test Case 2: All even lengths
const testCase2 = ['abcd', 'efghij', 'klmno', 'pqrs'];
console.log("Test Case 2 Result:", processStrings(testCase2));

// Test Case 3: All odd lengths
const testCase3 = ['a', 'abc', 'abcde', 'abcdefg'];
console.log("Test Case 3 Result:", processStrings(testCase3));

// Test Case 4: Empty array
const testCase4 = [];
console.log("Test Case 4 Result:", processStrings(testCase4));

// Test Case 5: Array with special characters and numbers
const testCase5 = ['12abc', 'def!@#', 'ghi123', '&*()'];
console.log("Test Case 5 Result:", processStrings(testCase5));

// Test Case 6: Long strings
const testCase6 = ['thisisaverylongstringthatshouldbeeven', 'short', 'tiny'];
console.log("Test Case 6 Result:", processStrings(testCase6));