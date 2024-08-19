function removeDuplicates(input) {
    return [...input].reduce((result, char) => {
        if (!result.includes(char)) {
            result += char;
        }
        return result;
    }, '');
}

// Example usage
let inputString = "javascript";
console.log(removeDuplicates(inputString));  // Output: "javscript"
