// function getUserData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const success=true;
//             if(success){
//                 resolve({name: "fatima hassan", id: 22})
//             }else{
//                 reject("failed user data")
//             }
//         },3000)
//     })
// }

// // getUserData()
// // .then(data => console.log("user data",data))
// // .catch(error => console.log("error", error));



// async  function displayUserData(){
// try{
//     const user= await getUserData();
//         console.log(user)
    

// }catch(erro){
//     console.log(erro)
// }
// }
// displayUserData()


const user={
    id:22,
    name: "Fatima Hassan",
    city: "Hargeisa"
}

console.log(user);

const jsonString = JSON.stringify(user);
console.log(jsonString);

const parseDate = JSON.parse(jsonString);
console.log(parseDate)