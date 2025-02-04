console.log("script starts here")

const func = ()=> {
    console.log("Inside set time out")   // will be printed after 2 sec
};

setTimeout(func,2000)    // here func is a callback function passed as an argument in the settimeout function

console.log("scripts end here")   // will be executed before settimeout func