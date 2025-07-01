let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}
//Executes only if the condition is true.

let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}

let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}


let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Tuesday":
    console.log("Second day");
    break;
  default:
    console.log("Another day");
}
//switch is great for checking one value against many cases.

