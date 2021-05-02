console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName( name ) {
  return `Hello ${name}`;
}
// Remember to call the function to test
console.log('Test-should say "Hello Ian"', helloName('Ian'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let sum = firstNumber + secondNumber
  return sum
  // return firstNumber + secondNumber;
}
console.log('Test- Should return sum', addNumbers(6,8));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
  let product = firstNumber * secondNumber * thirdNumber
  return product
}
console.log('Test- Should return product', multiplyThree(4,5,6));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
  }
}
console.log('Test- Should return true or false', isPositive(9));

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let arrayPotter = [ 'You', 'are', 'a', 'wizard!' ]
function getLast() {
  return (arrayPotter [arrayPotter.length-1])
}
console.log('Test- Should return the last word!', getLast(arrayPotter));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let barray = [1,2,3,4]
function find( value, barray ){
  for (let i = 0; i < barray.length; i++){
    if (value === barray [i]){
      return true;
  }
    else {
    return false;
  }
  }
}

console.log('Should find a value in the barray...', find(9, barray));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string){

}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

  // TODO: loop to add items

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

/*
Mubashir was walking through a straight street with exactly n identical houses on both sides. House numbers in the street look like this:

1 |   | 6

3 |   | 4

5 |   | 2
He noticed that Even numbered houses increases on the right while
Odd numbered houses decreases on the left.
Create a function that takes a house number house and
length of the street n and returns the house number on the opposite side.

Examples
oppositeHouse(1, 3) ➞ 6

oppositeHouse(2, 3) ➞ 5

oppositeHouse(3, 5) ➞ 8
*/

function oppositeHouse(house, n) {
	let oppositeHouse = ((2*n)-(house -1))
	return oppositeHouse
}

console.log('The house opposite is:',oppositeHouse(1, 3));
console.log('The house opposite is:',oppositeHouse(2, 3));
console.log('The house opposite is:',oppositeHouse(4, 5));
