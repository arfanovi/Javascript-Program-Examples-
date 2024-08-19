function areAnagrams(A, B) {
    // Check if lengths are different
    if (A.length !== B.length) {
        return "NO";
    }
    
    // Split, sort, and join the strings
    const sortedA = A.split('').sort().join('');
    const sortedB = B.split('').sort().join('');
    
    // Compare sorted strings
    return sortedA === sortedB ? "YES" : "NO";
}

// Example usage
const A = "listen";
const B = "silent";
console.log(areAnagrams(A, B));  // Output: "YES"
