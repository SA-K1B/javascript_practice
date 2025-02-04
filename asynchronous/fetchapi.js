//The fetch() method starts the process of fetching a resource from a server.
//The fetch() method returns a Promise that resolves to a Response object.

fetch("https://reqres.in/api/users/50")
.then((res)=>{
    if(res.ok)
        return res.json()
    else
        console.log("Data not found") // error related to client i.e, 404 not found
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log("Error is",err)    // error related to the server i.e, wrong url
})


// it is also possible to make other http requests(POST,PUT,DELETE) using this fetch by using the optional parameter