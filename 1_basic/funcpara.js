// function greet() {
//   console.log("Hello, Najeeb!");
// }

// greet(); // Calling the function


function greet(name) { // name = parameter
  console.log("Hello, " + name);
}

greet("Najeeb"); // "Najeeb" = argument


function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8

// Arrow Function (ES6)
const greet = (name) => {
  console.log("Hi " + name);
};

greet("Najeeb");



// Default Parameters
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();          // Hello, Guest
greet("Najeeb");  // Hello, Najeeb


// Rest Parameters ...
// Used to handle unknown number of arguments
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4)); // 10