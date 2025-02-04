fetch("https://reqres.in/api/users/50")
.then((res)=>{
    if(res.ok)
        return res.json()
    else
        console.log("Data not found")
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log("Error is",err)
})