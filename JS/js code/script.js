// // Variables

// alert('Hello World')
// prompt('What is your Name?')

// const name = prompt("What is your Name?");
// const Course = prompt("What is your Course?");
// alert("My name " + name + " and My Course is " + Course);

// const number = "9876543210";
// const first2 = number.slice(0, 2);
// const last2 = number.slice(-2);

// const privite = first2.padEnd(number.length - 2, "X") + last2;
// console.log(privite);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // operators
// Arithmetic operators
// let a = 10;
// let b = 5;

// console.log(a + b); // Addition
// console.log(a - b); // Subtraction
// console.log(a * b); // Multiplication
// console.log(a / b); // Division
// console.log(a % b); // Modulus (remainder)

// // Comparison operators
// console.log(a > b); // Greater than
// console.log(a < b); // Less than
// console.log(a >= b); // Greater than or equal to
// console.log(a <= b); // Less than or equal to
// console.log(a === b); // Equal to (strict equality)
// console.log(a !== b); // Not equal to (strict inequality)

// // Assignment operators
// let c = 15;
// c += 3; // c = c + 3
// c -= 2; // c = c - 2
// c *= 4; // c = c * 4
// c /= 2; // c = c / 2
// c %= 5; // c = c % 5

// // Logical operators
// let isTrue = true;
// let isFalse = false;

// console.log(isTrue && isFalse); // Logical AND
// console.log(isTrue || isFalse); // Logical OR
// console.log(!isTrue); // Logical NOT

// // String concatenation operator
// let firstName = "marcello";
// let lastName = "tech";
// console.log(firstName + " " + lastName);

// // typeof operator
// console.log(typeof firstName); // "string"
// console.log(typeof a); // "number"
// console.log(typeof isTrue); // "boolean"

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // conditional statements
// // Using if, else if, and else statements
// let age = 20;

// if (age < 18) {
//   console.log("You are a minor.");
// } else if (age >= 18 && age < 60) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a senior citizen.");
// }

// // Conditional (Ternary) operator
// let n = 7;
// let result = n % 2 === 0 ? "Even" : "Odd";
// console.log(result);

// // Using the switch statement
// let dayOfWeek = "Monday";

// switch (dayOfWeek) {
//   case "Monday":
//     console.log("It's the start of the week.");
//     break;
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//     console.log("It's a regular workday.");
//     break;
//   case "Friday":
//     console.log("It's almost the weekend.");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("It's the weekend!");
//     break;
//   default:
//     console.log("Invalid day of the week.");
//     break;
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // loops
// // Using while loop
// let count = 0;

// while (count < 5) {
//   console.log("Count:", count);
//   count++;
// }

// // Using do-while loop
// let num = 6;

// do {
//   console.log("Number:", num);
//   num++;
// } while (num < 5);

// ============== Logged In ==============

// name1 = prompt('set password')
// name = prompt('Enter your password')
// while (name !== name1){
//     name = prompt('Enter your password')
// }
// alert('Okay logged in')

// // Using for loop
// for (let i = 0; i < 5; i++) {
//   console.log("Index:", i);
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // functions

// // regular function
// function marcello() {
//   console.log("Marcello Tech");
// }
// marcello();

// // return function
// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 5)); // Outputs: 8

// // Arrow function
// const subtract = (a, b) => a - b;

// console.log(subtract(10, 3)); // Outputs: 7

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// DOM
// Get elements by ID
// const head = document.getElementById("head");
// head.innerHTML = "hi";

// // Get elements by tag name
// const h2 = document.getElementsByTagName("h2");
// h2[0].innerHTML = "Document object model";

// // Get elements by class name
// const para1 = document.getElementsByClassName("para");
// para1[0].innerHTML = "hello";

// // Use querySelector to get elements by CSS selector
// const button = document.querySelector(".button");
// const container = document.querySelector(".container");

// // Add event listener to the button
// button.addEventListener("click", function () {
//   head.textContent = "Heading Changed!";
//   container.style.backgroundColor = "blue";
//   container.style.color = "white";
// });

// // Create a new element and append it to the container
// const newPara = document.createElement("p");
// newPara.textContent = "This is a new paragraph.";
// container.appendChild(newPara);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // String methods

// //  Length
// //  replace
// //  replaceAll
// //  toUpperCase
// //  toLowerCase
// //  trim
// //  padStart
// //  padEnd
// //  split
// //  slice

// let str = "Hello, World!";

// // Length of the string
// console.log(str.length); // Outputs: 13

// // Convert to uppercase and lowercase
// console.log(str.toUpperCase()); // Outputs: HELLO, WORLD!
// console.log(str.toLowerCase()); // Outputs: hello, world!

// // Extracting substrings
// console.log(str.slice(7, -1)); // Outputs: World!

// // Splitting a string into an array
// console.log(str.split(", ")); // Outputs: ["Hello", "World!"]

// // Replacing a substring
// console.log(str.replace("Hello", "Hi")); // Outputs: Hi, World!

// // Removing whitespace from the beginning and end
// let whitespaceStr = "   Hello, World!   ";
// console.log(whitespaceStr.trim()); // Outputs: Hello, World!

// // Repeating a string
// console.log(str.repeat(3)); // Outputs: Hello, World!Hello, World!Hello, World!

// let number = "42";
// let paddedNumberStart = number.padStart(5, "0"); // Pad to a length of 5 with leading zeros
// let paddedNumberEnd = number.padEnd(5, "*"); // Pad to a length of 5 with trailing asterisks

// console.log("Padded Number (Start):", paddedNumberStart); // Outputs: "00042"
// console.log("Padded Number (End):", paddedNumberEnd); // Outputs: "42***"

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // Array methods

// // length
// // toString
// // pop
// // push
// // shift
// // unshift
// // join
// // concat
// // splice
// // slice
// // reverse
// // sort

// // Creating an array
// let fruits = ["apple", "banana", "orange", "grape"];

// // Accessing elements by index
// console.log(fruits[0]); // Outputs: "apple"
// console.log(fruits[2]); // Outputs: "orange"

// // Modifying an element
// fruits[1] = "kiwi";
// console.log(fruits); // Outputs: ["apple", "kiwi", "orange", "grape"]

// let numbers = [4, 2, 7, 1, 9];

// // Getting the length of the array
// console.log(numbers.length); // Outputs: 5

// // Converting the array to a string
// let numbersString = numbers.toString();
// console.log(numbersString); // Outputs: "4,2,7,1,9"

// // Removing the last element
// let poppedElement = numbers.pop();
// console.log(numbers); // Outputs: [4, 2, 7, 1]
// console.log(poppedElement); // Outputs: 9

// // Adding elements to the end
// numbers.push(6, 8);
// console.log(numbers); // Outputs: [4, 2, 7, 1, 6, 8]

// // Removing the first element
// let shiftedElement = numbers.shift();
// console.log(numbers); // Outputs: [2, 7, 1, 6, 8]
// console.log(shiftedElement); // Outputs: 4

// // Adding elements to the beginning
// numbers.unshift(5, 3);
// console.log(numbers); // Outputs: [5, 3, 2, 7, 1, 6, 8]

// // Joining array elements into a string
// let joinedString = numbers.join("-");
// console.log(joinedString); // Outputs: "5-3-2-7-1-6-8"

// // Concatenating arrays
// let moreNumbers = [10, 11, 12];
// let combinedNumbers = numbers.concat(moreNumbers);
// console.log(combinedNumbers); // Outputs: [5, 3, 2, 7, 1, 6, 8, 10, 11, 12]

// // Splicing an array (adding and removing elements)
// numbers.splice(2, 2, 0, 4);
// console.log(numbers); // Outputs: [5, 3, 0, 4, 1, 6, 8]

// // Creating a new array by slicing
// let slicedArray = numbers.slice(2, 5);
// console.log(slicedArray); // Outputs: [0, 4, 1]

// // Reversing the array
// numbers.reverse();
// console.log(numbers); // Outputs: [8, 6, 1, 4, 0, 3, 5]

// // Sorting the array
// numbers.sort();
// console.log(numbers); // Outputs: [0, 1, 3, 4, 5, 6, 8]

// sort - numbers
// numbers.sort((a,b)=>{
//     if(a>b) return 1;
//     if(b>a) return -1;
// })

// numbers.sort((a,b)=>a-b)
// numbers.sort((a,b)=>a+b)

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // Math methods

// // Math.random
// // Math.round
// // Math.ceil
// // Math.floor
// // Math.trunc
// // Math.abs
// // Math.pow
// // Math.sqrt
// // Math.min
// // Math.max

// // Generating a random number between 0 (inclusive) and 1 (exclusive)
// let randomNum = Math.random();
// console.log("Random Number:", randomNum);

// // Rounding a number to the nearest integer
// let roundedNum = Math.round(4.7);
// console.log("Rounded Number:", roundedNum);

// // Ceil value of a number (smallest integer greater than or equal to the number)
// let ceilValue = Math.ceil(3.2);
// console.log("Ceil Value:", ceilValue);

// // Floor value of a number (largest integer less than or equal to the number)
// let floorValue = Math.floor(5.8);
// console.log("Floor Value:", floorValue);

// // Truncate the decimal part of a number
// let truncatedNum = Math.trunc(9.75);
// console.log("Truncated Number:", truncatedNum);

// // Absolute value of a number
// let absoluteValue = Math.abs(-7);
// console.log("Absolute Value:", absoluteValue);

// // Power of a number
// let powerValue = Math.pow(2, 3);
// console.log("Power Value:", powerValue);

// // Square root of a number
// let sqrtValue = Math.sqrt(25);
// console.log("Square Root Value:", sqrtValue);

// // Minimum value among multiple numbers
// let minValue = Math.min(10, 5, 8, 12, 3);
// console.log("Minimum Value:", minValue);

// // Maximum value among multiple numbers
// let maxValue = Math.max(15, 20, 7, 30, 25);
// console.log("Maximum Value:", maxValue);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // objects

// // Creating an object using object literal syntax
// let person = {
//   firstName: "Marcello",
//   lastName: "tech",
//   age: 30,
//   isStudent: false,
//   sayHello: function () {
//     console.log("Hello, I'm " + this.firstName + " " + this.lastName);
//   },
// };

// // Accessing object properties
// console.log(person.firstName); // Outputs: "Marcello"
// console.log(person["lastName"]); // Outputs: "tech"

// // Modifying object properties
// person.age = 31;
// person.isStudent = true;

// // Calling object methods
// person.sayHello(); // Outputs: "Hello, I'm Marcello tech"

// // Adding new properties to the object
// person.nationality = "USA";
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // Dates

// // Get the current date
// const currentDate = new Date();

// console.log("Current Date:", currentDate);

// // Get specific components of the date
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth() + 1; // Note: months are 0-based
// const day = currentDate.getDate();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();

// console.log(`Year: ${year}`);
// console.log(`Month: ${month}`);
// console.log(`Day: ${day}`);
// console.log(`Hours: ${hours}`);
// console.log(`Minutes: ${minutes}`);
// console.log(`Seconds: ${seconds}`);

// // Manipulating dates
// const tomorrow = new Date();
// tomorrow.setDate(currentDate.getDate() + 1);

// console.log("Tomorrow's Date:", tomorrow);

// const nextWeek = new Date();
// nextWeek.setDate(currentDate.getDate() + 7);

// console.log("Date after one week:", nextWeek);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// // Destructuring
// // Array
// // object

// // Destructuring an array
// let numbers = [1, 2, 3, 4, 5];

// let [first, second, ...rest] = numbers;

// console.log(first); // Outputs: 1
// console.log(second); // Outputs: 2
// console.log(rest); // Outputs: [3, 4, 5]

// // Destructuring an object
// let person = {
//   firstName: "Marcello",
//   lastName: "tech",
//   age: 30,
//   country: "India",
// };

// let { firstName, age } = person;

// console.log(firstName); // Outputs: "Marcello"
// console.log(age); // Outputs: 30

// // Destructuring with renaming
// let { firstName: fName, lastName: lName } = person;

// console.log(fName); // Outputs: "Marcello"
// console.log(lName); // Outputs: "tech"

// // Destructuring with default values
// let { job = "Unknown" } = person;

// console.log(job); // Outputs: "Unknown"

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // Array Iteration

// // forEach
// // map
// // filter
// // reduce
// // find
// // every
// // some
// // includes
// // indexOf
// // findIndexOf
// // flat

// let numbers = [1, 2, 3, 4, 5, 6];

// // Using forEach to iterate over array elements
// console.log("forEach:");
// numbers.forEach((num) => console.log(num));

// // Using map to create a new array by doubling each element
// console.log("\nmap:");
// let doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers);

// // Using filter to create a new array with even numbers
// console.log("\nfilter:");
// let evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// // Using reduce to calculate the sum of all numbers
// console.log("\nreduce:");
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// // Using find to get the first even number
// console.log("\nfind:");
// let firstEven = numbers.find((num) => num % 2 === 0);
// console.log(firstEven);

// // Using every to check if all numbers are even
// console.log("\nevery:");
// let allEven = numbers.every((num) => num % 2 === 0);
// console.log(allEven);

// // Using some to check if there's at least one even number
// console.log("\nsome:");
// let hasEven = numbers.some((num) => num % 2 === 0);
// console.log(hasEven);

// // Using includes to check if a specific value is in the array
// console.log("\nincludes:");
// let includesThree = numbers.includes(3);
// console.log(includesThree);

// // Using indexOf to find the index of a specific value
// console.log("\nindexOf:");
// let index = numbers.indexOf(4);
// console.log(index);

// // Using findIndex to find the index of the first even number
// console.log("\nfindIndex:");
// let evenIndex = numbers.findIndex((num) => num % 2 === 0);
// console.log(evenIndex);

// // Using flat to flatten a nested array
// console.log("\nflat:");
// let nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let flattenedArray = nestedArray.flat();
// console.log(flattenedArray);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // async

// // setTimeout
// // clearTimeout
// // setInterval
// // clearInterval

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// API
// Define the URL of the API you want to request
// let apiUrl = "https://official-joke-api.appspot.com/random_joke";

// // Make a GET request to the API using fetch
// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json(); // Parse the JSON response
//   })
//   .then((data) => {
//     console.log("API Response:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Promise

// Simulating an asynchronous operation with a Promise
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     const a = false;
//     if (a) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }

// // Using the Promise
// console.log("Fetching data...");

// fetchData()
//   .then((response) => {
//     console.log("Success");
//   })
//   .catch((error) => {
//     console.error("Something error");
//   })
//   .finally(() => {
//     console.log("Promise completed.");
//   });
