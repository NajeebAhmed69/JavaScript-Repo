// // async function getAllUsers(){
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')

// //         const data = await response.json()
// //         console.log(data);
// //     } catch (error) {
// //         console.log("E: ", error);
// //     }
// // }

// //getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

// // promise.all
// // yes this is also available, kuch reading aap b kro.




function wait() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done waiting!"), 2000);
  });
}

async function run() {
  console.log("Waiting...");
  const result = await wait(); // pauses until wait() resolves
  console.log(result);
}

run();



async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

fetchUsers();