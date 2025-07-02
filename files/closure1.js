function one(){
    let counter=0;
    return function two(){
        counter++;
        console.log("COUNTER IS : ",counter)
     }

}


const increment=one()

increment()
increment()
increment()

// inner() is a closure, because 
// It remembers counter even after outer() has finished
// It has access to its lexical scope

