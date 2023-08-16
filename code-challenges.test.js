// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { exportAllDeclaration } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// input: array
// output: array with first item removed
describe('shuffledArray', () => {
  it('will match even if in different order', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]
    expect(shuffledArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffledArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})
// ReferenceError: shuffledArray is not defined
// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function that accepts an array as parameter
// Create a variable and assign it to an array without the first element using slice
// Loop through the new array starting from last index
  // Create a variable that stores a random index
  // Create a temp variable and assign it to current element
  // Reassign current element to random element
  // Reassign random element to temp
// Return new array

 const shuffledArray = (arr) => {
   let newArr = arr.slice(1)
   for (let i = newArr.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     let temp = newArr[i];
     newArr[i] = newArr[j];
     newArr[j] = temp;
  }
  return newArr;
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// input: object
// output: a number
describe('endTally', () => {
  it('returns the difference between upVotes and downVotes', () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    expect(endTally(votes1)).toEqual(11)
    const votes2 = { upVotes: 2, downVotes: 33 }
    expect(endTally(votes2)).toEqual(-31)
  })
})
//  ReferenceError: endTally is not defined

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function that accepts an object as parameter
// Use the Object.values method to get an array of the values and assign it to a variable
// Return the first element of array - second element of array

const endTally = (obj) => {
  let arr = Object.values(obj)
  return arr[0] - arr[1]
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// input: two arrays
// output: an array with no duplicate values
describe('noDuplicate', () => {
  it('returns an array with no duplicate values', () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    expect(noDuplicate(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
// ReferenceError: noDuplicate is not defined

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function that accepts two arrays as parameters using spread operator syntax
// Create a variable and assign it to an empty array with both arrays combined using .concat()
// Return a new array with no duplicate values using filter method.
// Use the condition of if the first index the element is found is equal to the index of the iteration using indexOf()

const noDuplicate = (...arr) => {
  let combined = [].concat(...arr)
  return combined.filter((value, index) => combined.indexOf(value) === index)
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total