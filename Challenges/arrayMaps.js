// Function to check if there exists a subarray with the given target sum
function hasSubarrayWithSum(arr, target) {
  // Check the array size constraints
  if (arr.length < 1) {
    return "Array must contain at least 1 element.";
  }
  if (arr.length > 100000) {
    return "Array must not contain more than 100,000 elements.";
  }

  // Check the range of the target sum
  if (target < -1000000000 || target > 1000000000) {
    return "Target sum must be between -1,000,000,000 and 1,000,000,000.";
  }

  // Check the range of elements in the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < -1000000000 || arr[i] > 1000000000) {
      return "All elements in the array must be between -1,000,000,000 and 1,000,000,000.";
    }
  }

  // Initialize pointers and variables
  let start = 0;
  let currentSum = 0;

  // Iterate through the array
  for (let end = 0; end < arr.length; end++) {
    // Add the current element to the sum
    currentSum += arr[end];

    // Adjust the start pointer if the sum exceeds the target
    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    // Check if the current sum equals the target
    if (currentSum === target) {
      return true;
    }
  }

  // If no subarray is found, return false
  return false;
}


const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); 
