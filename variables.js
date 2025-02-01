//console.log(name)  // undefined
//console.log(id)   // reference error
//console.log(level) // same error as let

var name = "john"
let id = 1
const level = 2

//level = 3   // not possible..cannot be changed
//level = level+1

// console.log("var")
// console.log(level)

/*
if(id == 1){
    var first = "john"
}
console.log(first)
*/    
//this works because scope of var is global, meaning it is accessible from start to end of the function where it is declared


/*
if(id == 1){
    let first = "john"
}
console.log(first)
*/
// does not work..let is alive only inside the block {}