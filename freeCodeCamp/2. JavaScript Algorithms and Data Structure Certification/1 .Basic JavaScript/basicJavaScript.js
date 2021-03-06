/*============================
Comment Your JavaScript Code
============================*/

// This is an in-line comment.
/* This is a
multi-line comment */

/*============================
Declare JavaScript Variables
============================*/

/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

// Example
var ourName;

// Declare myName below this line
var myName;
myName = "Cameron";

/*============================
Storing Values with the Assignment Operator
============================*/

// Setup
var a;
var b = 2;

// Only change code below this line
a = 7;
b = 7;
b = a;

/*============================
Initializing Variables with the Assignment Operator
============================*/

// Example
var ourVar = 19;

// Only change code below this line
var a = 9;

/*============================
Understanding Uninitialized Variables
============================*/

// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

/*============================
Understanding Case Sensitivity in Variable
============================*/

// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/*============================
Add Two Numbers with JavaScript
============================*/

var sum = 10 + 10;

/*============================
Subtract One Number from Another with JavaScript
============================*/

var difference = 45 - 33;

/*============================
Multiply Two Numbers with JavaScript
============================*/

var product = 8 * 10;

/*============================
Divide One Number by Another with JavaScript
============================*/

var quotient = 66 / 33;

/*============================
Increment a Number with JavaScript
============================*/

var myVar = 87;

// Only change code below this line
myVar++;

/*============================
Decrement a Number with JavaScript
============================*/

var myVar = 11;

// Only change code below this line
myVar--;

/*============================
Create Decimal Numbers with JavaScript
============================*/

var ourDecimal = 5.7;

// Only change code below this line

var myDecimal = 2.1;

/*============================
Multiply Two Decimals with JavaScript
============================*/

var product = 2.0 * 2.5;

/*============================
Divide One Decimal by Another with JavaScript
============================*/

var quotient = 4.4 / 2.0;

/*============================
Finding a Remainder in JavaScript
============================*/

var remainder;
remainder = 11 % 3;

/*============================
Compound Assignment With Augmented Addition
============================*/

var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a += 12;
b += 9;
c += 7;

/*============================
Compound Assignment With Augmented Subtraction
============================*/

var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a -= 6;
b -= 15;
c -= 1;

/*============================
Compound Assignment With Augmented Multiplication
============================*/

var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a *= 5;
b *= 3;
c *= 10;

/*============================
Compound Assignment With Augmented Division
============================*/

var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a /= 12;
b /= 4;
c /= 11;

/*============================
Declare String Variables
============================*/

// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line

var myFirstName = "Cameron";
var myLastName = "Milner";

/*============================
Escaping Literal Quotes in Strings
============================*/

var myStr = 'I am a "double quoted" string inside "double quotes".'; // Change this line

/*============================
Quoting Strings with Single Quotes
============================*/

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/*============================
Escape Sequences in Strings
============================*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

/*============================
Concatenating Strings with Plus Operator
============================*/

// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr = "This is the start. " + "This is the end.";

/*============================
Concatenating Strings with the Plus Equals Operator
============================*/

// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

/*============================
Constructing Strings with Variables
============================*/

// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName = "Cameron";
var myStr = "Hello, our name is " + myName + " Milner";

/*============================
Appending Variables to Strings
============================*/

// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective = "fun";
var myStr = "Learning to code is ";
myStr += someAdjective;

/*============================
Find the Length of a String
============================*/

// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;

/*============================
Use Bracket Notation to Find the First Character in a String
============================*/

// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

/*============================
Understand String Immutability
============================*/

// Setup
var myStr = "Jello World";

// Only change code below this line

myStr = "Hello World"; // Fix Me

/*============================
Use Bracket Notation to Find the Nth Character in a String
============================*/

// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

/*============================
Use Bracket Notation to Find the Last Character in a String
============================*/

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

/*============================
Use Bracket Notation to Find the Nth-to-Last Character in a String
============================*/

// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

/*============================
Word Blanks
============================*/

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks =
  "the " + myNoun + " " + myVerb + " " + myAdjective + " " + myAdverb; // Only change this line;

/*============================
Store Multiple Values in one Variable using JavaScript Arrays
============================*/

// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["John", 23];

/*============================
Nest one Array within Another Array
============================*/

// Example
var ourArray = [
  ["the universe", 42],
  ["everything", 101010],
];

// Only change code below this line.
var myArray = [
  ["the universe", 42],
  ["everything", 101010],
];

/*============================
Access Array Data with Indexes
============================*/

// Example
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50, 60, 70];

// Only change code below this line.

var myData = myArray[0];

/*============================
Modify Array Data With Indexes
============================*/

// Example
var ourArray = [18, 64, 99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18, 64, 99];

// Only change code below this line.
myArray[0] = 45;

/*============================
Access Multi-Dimensional Arrays With Indexes
============================*/

// Setup
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

// Only change code below this line.
var myData = myArray[2][1];

/*============================
Manipulate Arrays With push()
============================*/

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line.
myArray.push(["dog", 3]);

/*============================
Manipulate Arrays With pop()
============================*/

// Example
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line.
var removedFromMyArray = myArray.pop();

/*============================
Manipulate Arrays With shift()
============================*/

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [
  ["John", 23],
  ["dog", 3],
];

// Only change code below this line.
var removedFromMyArray = myArray.shift();

/*============================
Manipulate Arrays With unshift()
============================*/

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul", 35]);

/*============================
Shopping List
============================*/

var myList = [
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
];

/*============================
Write Reusable JavaScript with Functions
============================*/

// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

/*============================
Passing Values to Functions with Arguments
============================*/

// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5);

/*============================
Global Scope and Functions
============================*/

// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/*============================
Local Scope and Functions
============================*/

function myLocalScope() {
  "use strict"; // you shouldn't need to edit this line
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

// Now remove the console log line to pass the test

/*============================
Global vs. Local Scope in Functions
============================*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

/*============================
Return a Value from a Function with Return
============================*/

// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line

function timesFive(num) {
  return num * 5;
}

console.log(minusSeven(10));

/*============================
Understanding Undefined Value returned from a Function
============================*/

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line

// Only change code above this line
var sum = 8;

function addFive() {
  sum += 5;
}

/*============================
Assignment with a Returned Value
============================*/

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7); //this number becomes (num) in above formula

/*============================
Stand in Line
============================*/

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift(); // Change this line
}

// Test Setup
var testArr = [1, 2, 3, 4, 5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

//need to study this, don't understand

/*============================
Understanding Boolean Values
============================*/

function welcomeToBooleans() {
  // Only change code below this line.

  return true; // Change this line

  // Only change code above this line.
}

/*============================
Use Conditional Logic with If Statements
============================*/

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {
  // Only change code below this line.

  if (wasThatTrue) {
    return "Yes, that was true";
  }
  // Only change code above this line.
  return "No, that was false";
}

// Change this value to test
trueOrFalse(true);

/*============================
Comparison with the Equality Operator
============================*/

// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(12);

10 == 10;
10 == 12;
12 == "12";
"12" == 12;

/*============================
Comparison with the Strict Equality Operator
============================*/

// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(7);

7 === 10;
7 === 7;
7 === "7";

/*============================
Practice comparing different values
============================*/

// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");

10 === "10";
"20" === 20;

/*============================
Comparison with the Inequality Operator
============================*/

// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);

10 != 99;
99 != "99";
12 != 12;
12 != "12";
12 != "bob";

/*============================
Comparison with the Strict Inequality Operator
============================*/

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

17 !== 17;
17 !== "17";
17 !== 12;
17 !== "bob";

/*============================
Comparison with the Greater Than Operator
============================*/

function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);

0 > 10;
10 > 10;
11 > 10;
99 > 10;
100 > 10;
101 > 100;
150 > 100;

/*============================
Comparison with the Greater Than Or Equal To Operator
============================*/

function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);

/*============================
Comparison with the Less Than Operator
============================*/

function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);

/*============================
Comparison with the Less Than Or Equal To Operator
============================*/

function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);

/*============================
Comparisons with the Logical And Operator
============================*/

function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);

/*============================
Comparisons with the Logical Or Operator
============================*/

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);

/*============================
Introducing Else Statements
============================*/

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);

/*============================
Introducing Else If Statements
============================*/

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
// Change this value to test
testElseIf(7);

/*============================
Logical Order in If Else Statements
============================*/

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);

/*============================
Chaining If Else Statements
============================*/

/*============================
Golf Code
============================*/

/*============================
Selecting from Many Options with Switch Statements
============================*/

/*============================
Adding a Default Option in Switch Statements
============================*/

/*============================
Multiple Identical Options in Switch Statements
============================*/

/*============================
Replacing If Else Chains with Switch
============================*/

/*============================
Returning Boolean Values from Functions
============================*/

/*============================
Return Early Pattern for Functions
============================*/

/*============================
Counting Cards
============================*/

/*============================
Build JavaScript Objects
============================*/

/*============================
Accessing Object Properties with Dot Notation
============================*/

/*============================
Accessing Object Properties with Bracket Notation
============================*/

/*============================
Accessing Object Properties with Variables
============================*/

/*============================
Updating Object Properties
============================*/

/*============================
Add New Properties to a JavaScript Object
============================*/

/*============================
Delete Properties from a JavaScript Object
============================*/

/*============================
Using Objects for Lookups
============================*/

/*============================
Testing Objects for Properties
============================*/

/*============================
Manipulating Complex Objects
============================*/

/*============================
Accessing Nested Objects
============================*/

/*============================
Accessing Nested Arrays
============================*/

/*============================
Record Collection
============================*/

/*============================
Iterate with JavaScript While Loops
============================*/

/*============================
Iterate with JavaScript For Loops
============================*/

/*============================
Iterate Odd Numbers With a For Loop
============================*/

/*============================
Count Backwards With a For Loop
============================*/

/*============================
Iterate Through an Array with a For Loop
============================*/

/*============================
Nesting For Loops
============================*/

/*============================
Iterate with JavaScript Do...While Loops
============================*/

/*============================
Replace Loops using Recursion
============================*/

/*============================
Profile Lookup
============================*/

/*============================
Generate Random Fractions with JavaScript
============================*/

/*============================
Generate Random Whole Numbers with JavaScript
============================*/

/*============================
Generate Random Whole Numbers within a Range
============================*/

/*============================
Use the parseInt Function
============================*/

/*============================
Use the parseInt Function with a Radix
============================*/

/*============================
Use the Conditional (Ternary) Operator
============================*/

/*============================
se Multiple Conditional (Ternary) Operators
============================*/

/*============================
Use Recursion to Create a Countdown
============================*/

/*============================
Use Recursion to Create a Range of Numbers
============================*/
