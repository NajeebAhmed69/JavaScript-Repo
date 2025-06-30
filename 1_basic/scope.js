// //scope detailed


// if (true) {
//     let a=1
//     var b=2
//     const c=3
// }

// // console.log(a)
// console.log(b)
// // console.log(c)


// global scope
// let name = "Najeeb"; // global variable

// function greet() {
//   console.log("Hello " + name); //accessible
// }

// greet();
// console.log(name); //accessible

// Function Scope
// function showAge() {
//   let age = 21;
//   console.log(age); //21
// }

// showAge();
// console.log(age); Error: age is not defined
// var also has function scope, not block scope

// function exp(){
// if (true) {
//     var b=2
// }
// console.log(b)
// }
// exp()
// console.log(b)

//this is block scope
// {
//   let city = "Jamshoro";
//   const zip = 76090;
//   console.log(city); // "Jamshoro"
// }

// console.log(city); Error
// console.log(zip);  Error


// var does not respect block scope. It is function-scoped instead:
// {
//   var x = 10;
// }
// console.log(x);


// let globalVar = "I'm global"; // Global Scope

// function outer() {
//   let functionVar = "I'm in outer"; // Function Scope

//   if (true) {
//     let blockVar = "I'm block-scoped"; // Block Scope
//     console.log(globalVar);   // accessible
//     console.log(functionVar); // accessible
//     console.log(blockVar);    // accessible
//   }

//   // console.log(blockVar);  Error: not accessible here
// }



console.log(a); // undefined
var a = 10;

sayHi();        // Works because function is hoisted
function sayHi() {
  console.log("Hello");
}

console.log(b); // ReferenceError
let b = 20;