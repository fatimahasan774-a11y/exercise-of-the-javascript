// let isSanny =true;
// let weekEnd = false;
// console.log(isSanny && weekEnd);

// console.log(isSanny || weekEnd);



// let age=23;
// let message= age >= 18 ?'your`re an adult' :'your`re minor';
// console.log(message)


function fetchUserDate(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const success = true;
            if(success){
                resolve({id: 1, name: "fatima"});
            }else{
                reject("failed to fetch user data");
            }
        },1000) 
    });
}

fetchUserDate()
.then(data => console.log("user data:", data))
.catch(error => console.error("Error:", error));

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true; // Simulating success or failure
//             if (success) {
//                 resolve({ id: 1, name: "John Doe" });
//             } else {
//                 reject("Failed to fetch user data");
//             }
//         }, 3000);
//     });
// }

// fetchUserData()
//     .then(data => console.log("User Data:", data))
//     .catch(error => console.error("Error:", error));
