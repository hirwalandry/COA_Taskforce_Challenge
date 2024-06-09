// Function returns reversed array of characters that has already been split
function reverseArrayString(splitString) {
  // Use reverse() method to reverse the array
  let reverseArray = splitString.reverse();
  // Return the reversed array
  return reverseArray;
}

// Function returns array of characters turned into ASCII codes for the given string that has already been split
function charsAsciiCodeArray(splitString, hasToBeReversedString) {
  // Declare array to hold characters turned into ASCII codes
  let charsAsciiCode = [];
  // Check if the action needs to be performed on reversed characters of the string
  if (hasToBeReversedString) {
    // Array of reversed characters of the string
    let reverseArray = reverseArrayString(splitString);
    // Loop through reversed array to convert each character into ASCII value and push into the declared array
    for (let i = 0; i < reverseArray.length; i++) {
      const char = reverseArray[i];
      let charAsciiCode = char.charCodeAt(0);
      charsAsciiCode.push(charAsciiCode);
    }
  } else {
    // Loop through the original array to convert each character into ASCII value and push into the declared array
    for (let i = 0; i < splitString.length; i++) {
      const char = splitString[i];
      let charAsciiCode = char.charCodeAt(0);
      charsAsciiCode.push(charAsciiCode);
    }
  }
  // Return the array of characters turned into ASCII codes
  return charsAsciiCode;
}

// Function checks if the reversed string's length is divisible by three
function hasRevesedStringItsLengthDivisibleByThree(str) {
  // Check the length constraints
  if (str.length < 1 || str.length > 1000) {
    return "String length must be between 1 and 1000 characters.";
  }

  // Check if the string contains only alphanumeric characters and spaces
  if (!/^[a-zA-Z0-9 ]+$/.test(str)) {
    return "String must contain only alphanumeric characters and spaces.";
  }

  // Remove all spaces from the string
  const strWithoutSpace = str.replace(/ /g, "");
  // Split the string into an array of characters
  let splitString = strWithoutSpace.split("");
  // Check if the string length is divisible by 3
  if (strWithoutSpace.length % 3 == 0) {
    // Invoke reverseArrayString method to reverse the array
    const reverseArray = reverseArrayString(splitString);
    // Join all elements of the array into a string
    let joinArray = reverseArray.join("");
    // Return the reversed string
    return joinArray;
  }
  // Return a message if the length is not divisible by 3
  return "Please provide string with its length divisible by three!!";
}

// Function checks if the reversed string's length is divisible by five
function hasRevesedStringItsLengthDivisibleByFive(str) {
  // Check the length constraints
  if (str.length < 1 || str.length > 1000) {
    return "String length must be between 1 and 1000 characters.";
  }

  // Check if the string contains only alphanumeric characters and spaces
  if (!/^[a-zA-Z0-9 ]+$/.test(str)) {
    return "String must contain only alphanumeric characters and spaces.";
  }

  // Remove all spaces from the string
  const strWithoutSpace = str.replace(/ /g, "");
  // Split the string into an array of characters
  let splitString = strWithoutSpace.split("");
  // Check if the string length is divisible by 5
  if (strWithoutSpace.length % 5 == 0) {
    // Invoke charsAsciiCodeArray method to convert characters to ASCII codes
    const charsAsciiCode = charsAsciiCodeArray(splitString, false);
    // Join all elements of the array into a string
    let joinArray = charsAsciiCode.join(" ");
    // Return the joined array
    return joinArray;
  }
  // Return a message if the length is not divisible by 5
  return "Please provide string with its length divisible by five!!";
}

// Function checks if the reversed string's length is divisible by both three and five
function hasRevesedStringItsLengthDivisibleByThreeAndFive(str) {
  // Check the length constraints
  if (str.length < 1 || str.length > 1000) {
    return "String length must be between 1 and 1000 characters.";
  }

  // Check if the string contains only alphanumeric characters and spaces
  if (!/^[a-zA-Z0-9 ]+$/.test(str)) {
    return "String must contain only alphanumeric characters and spaces.";
  }

  // Remove all spaces from the string
  const strWithoutSpace = str.replace(/ /g, "");
  // Split the string into an array of characters
  let splitString = strWithoutSpace.split("");
  // Check if the string length is divisible by both 3 and 5
  if (strWithoutSpace.length % 3 == 0 && strWithoutSpace.length % 5 == 0) {
    // Convert characters to ASCII codes with reversed string
    const charsAsciiCode = charsAsciiCodeArray(splitString, true);
    // Join all elements of the array into a string
    let joinArray = charsAsciiCode.join(" ");
    // Return the joined array
    return joinArray;
  } else if (strWithoutSpace.length % 3 == 0) {
    // Reverse the array if length is divisible by 3
    const reverseArray = reverseArrayString(splitString);
    // Join all elements of the array into a string
    let joinArray = reverseArray.join("");
    // Return the joined array
    return joinArray;
  } else if (strWithoutSpace.length % 5 == 0) {
    // Convert characters to ASCII codes if length is divisible by 5
    const charsAsciiCode = charsAsciiCodeArray(splitString, false);
    // Join all elements of the array into a string
    let joinArray = charsAsciiCode.join(" ");
    // Return the joined array
    return joinArray;
  }
  // Return a message if the length is not divisible by 3 or 5
  return "Please provide string with its length divisible by three and five!!";
}

// Invoke the functions with provided examples
hasRevesedStringItsLengthDivisibleByThree("hamburger"); 
hasRevesedStringItsLengthDivisibleByFive("pizza");
hasRevesedStringItsLengthDivisibleByThreeAndFive("Chocolate Chip co")

