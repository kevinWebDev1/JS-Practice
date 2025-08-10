/**
 * Count Unique Values
 * Implement a function called countUniqueValues, which accepts a sorted array, 
 * and counts the unique values in the array. The function should return the 
 * number of unique values that exist inside the array.
 */

// Examples:
// Input: [1,1,1,2,2,3]         → Output: 3
// Input: [1,2,3,4,4,4,7,7,12,12,13] → Output: 7
// Input: []                    → Output: 0
// Input: [1]                   → Output: 1

function countUniqueValues(arr) {
    if(arr.length === 0) return 0;

    let i = 0; // 1, 
    let count = 1;
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i = j;
            count++;
        }
    }    
    return count;
console.log(countUniqueValues([]));
console.log(countUniqueValues([1]));
