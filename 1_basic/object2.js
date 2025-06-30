// const User=new Object()

// User.name="NajeebAhmed"
// User.email="najeebahmed@google.com"
// User.isLoggedIn=false

// console.log(User)


// const obj1={1:"a",2:"b"}

// const obj2={3:"c",4:"d"}

//2 object combine 
// console.log(Object.assign(obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3)


// console.log(Object.keys(User))
// console.log(Object.values(User))
// console.log(User.hasOwnProperty('name'))

// -------------------------------------------------------
// object de-structuring

// const user = {
//   name: "Najeeb",
//   age: 21,
//   city: "Jamshoro"
// };

// Destructuring:
// const { name, age } = user
// console.log(name); // "Najeeb"
// console.log(age);  // 21


// Rename Variables While Destructuring
// const { name: fullName, age: userAge } = user;


// console.log(fullName); // "Najeeb"
// console.log(userAge);  // 21

//  Default Values in Destructuring
const user = {
  name: "Najeeb"
};

const { name, age = 20 } = user;

console.log(age); // 20 (default because `age` was not in object)
