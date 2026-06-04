function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success=true;
            if(success){
                resolve({name: "fatima hassan", id: 22})
            }else{
                reject("failed user data")
            }
        },3000)
    })
}

// getUserData()
// .then(data => console.log("user data",data))
// .catch(error => console.log("error", error));



async  function displayUserData(){
try{
    const user= await getUserData();
        console.log(user)
    

}catch(erro){
    console.log(erro)
}
}
displayUserData()