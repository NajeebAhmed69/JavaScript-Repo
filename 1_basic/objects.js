

//it's take symbole and put it in object and print
const sym=Symbol()
const user={
    name:"Najeeb",
    "fullname":"NajeebAhmed",
    [sym]:"it symbol which is injected ",
    age:20,
    location:"Karachi",
    email:"najeeb@gmail.com",
    isLoggedIn:false
}

console.log(user.email)
user.email="najeebahmed@google.com"
console.log(user["email"])
console.log(user["fullname"])
console.log(user[sym])
