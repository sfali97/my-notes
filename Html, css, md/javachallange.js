// Simple function to log an array of strings
function logStringArray(stringArray) {
    // Check if the input is an array
    if (!Array.isArray(stringArray)) {
        console.error("Input must be an array of strings.");
        return;
    }
    
    // Log each string in the array
    stringArray.forEach(str => {
        console.log(str);
    });
}

// Example usage
const strings = ["Hello", "world!", "JavaScript", "is", "fun."];
logStringArray(strings);