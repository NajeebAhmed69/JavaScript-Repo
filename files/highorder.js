//for-of
// const arr =[1,2,3,4,5]
// for (const value of arr) {
//     console.log(value)
// }

// const greeting='hello world'
// for (const vl of greeting) {
//     console.log(vl)
// }

//map
// const map=new Map()
// map.set("NA","Najeeb Ahmed")
// map.set("IN","INDIA")
// map.set("USA","America")
// map.set("PK","Pakistan")

// console.log(map)
// //if we want to iterate on map by for of 
// for (const [key,val] of map) {
//     console.log(key,"=>",val)
// }


// const myObj={
//     'game1':'PUBG',
//     'game2':'CSG'
// }

// for (const element of myObj) {
//     console.log(element)
// } this is not iterable (object)


// const myOBJ={
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby",
//     R:"rust"
// }

// for (const key in myOBJ) {
//     console.log(`${key} shortcut is for ${myOBJ[key]}`);
// }



const coding=["py","js","ruby","R","swift"]

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr)
} );
const numbers = [1, 2, 3];

numbers.forEach((num,index,arr) => {
  console.log(num ,index,arr);
});
