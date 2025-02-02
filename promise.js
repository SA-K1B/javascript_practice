const myPromise = new Promise((resolve,reject)=>{
    console.log("....")
  //  resolve("Success");
    reject("error")
})

myPromise.then((res)=>{
    console.log("Congrats for",msg)
})

myPromise.catch((err)=>{
    console.log("Sorry for",err)
})