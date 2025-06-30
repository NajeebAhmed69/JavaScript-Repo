// var Function-scoped
// function test() {
//   if (true) {
//     var x = 5;
//   }
//   console.log(x); 
// }

// x is accessible outside the block but inside the function.
// This can cause bugs.

// let and const → Block-scoped

// function test() {
//   if (true) {
//     let x = 5;
//     const y = 10;
//   }
//   console.log(x); //  ReferenceError
//   console.log(y); //  ReferenceError
// }



// Redeclaration
// let b = 1;
// let b = 2;
// console.log(b)// ❌ SyntaxError


