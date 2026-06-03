function getUserData(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const success=true;
            if(success){
                resolve({id:1, name: "fatima"})
            }else{
                reject("Failed user data")
            }
        },3000)
    })
}

getUserData()
.then(data => console.log("user data:", data))
.catch(error => console.error("error:", error));