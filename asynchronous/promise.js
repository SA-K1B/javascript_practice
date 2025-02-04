const myPromise = new Promise((resolve,reject)=>{
    console.log("....")
  //  resolve("Success");
    reject("error")
})

myPromise.then((res)=>{
    console.log("Congrats for",msg)     // executes if successfull / fullfilled
})

myPromise.catch((err)=>{
    console.log("Sorry for",err)    // executes if error occurred
})