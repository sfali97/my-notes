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

// Example usage
const exampleArray = ['hello', 'world', 'javascript', 'is', 'fun']; // Sample array of strings
const result = processStrings(exampleArray); // Call the function with the sample array
console.log(result); // Log the result to the console