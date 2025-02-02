console.log("script starts here")

const func = ()=> {
    console.log("Inside set time out")   // will be printed after 2 sec
};

setTimeout(func,2000)

console.log("scripts end here")   // will be executed before settimeout func