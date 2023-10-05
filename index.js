function hasTargetSum(arr, target) {
 const seenNumbers = new Set();

    for (const num of arr) {
      const difference = target - num;
      if (seenNumbers.has(difference)) {
          return true; // Found a pair
      }
      seenNumbers.add(num);
  }

  return false; // No pair found
}

/* 
  Write the Big O time complexity = time complexity of O(n)
*/

/* 
pseudocode=Create an empty set called seenNumbers to keep track of the numbers seen so far.

Loop through 

For each number in the array, calculate the difference between the target integer and the current number (i.e., target - currentNumber).
Check if the calculated difference exists in the seenNumbers set:

If it exists, return true because you've found a pair of numbers whose sum equals the target integer.
If it doesn't exist, add the current number to the seenNumbers set.
If you complete the loop without finding a pair, return false because there is no pair of numbers that adds up to the target integer.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
