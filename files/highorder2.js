// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=> num>4 )

// // const newNums=myNums.filter((num)=> {
// //     return num>4} )
// console.log(newNums)



// const myNums=[1,2,3,4,5,6,7,8,9,10]
// // const newnums=myNums.map((num)=>  num * 2)
// const newnums=myNums.map((num)=> { return num * 2})

// console.log(newnums)


//chaining
// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newnums=myNums
// .map((num)=>num *10)
// .map((num)=>num+1)//[11, 21, 31, 41,  51,61, 71, 81, 91, 101]
// .filter((num)=> num>=40)// filter[41, 51,  61, 71,81, 91, 101]
// console.log(newnums)


//reduce() Accumulate into a single value
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
