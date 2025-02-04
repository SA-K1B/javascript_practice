// the keyword async before a function makes the function return a promise

async function fetchUser() {
    try{
        const res = await fetch("https://reqres.in/api/users/1")
        if(!res.ok){
            console.log("Data not found") // error related to client i.e, 404 not found
        }
        const json_res = await res.json()
        console.log(json_res)
    }
    catch(err){
        console.log("Error is ",err)
    }
} fetchUser()