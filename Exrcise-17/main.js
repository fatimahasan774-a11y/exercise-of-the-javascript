// let temperature =0;
// if(temperature ){

// }else if( temperature > 0){
//     console.log('very cold')

// }else if(temperature >0-15 ){
// console.log('cold')
// }else if(temperature > 15-25 ){
//     console.log('warm')
// }else if(temperature > 25){
//     console.log('hot')
// }

// setTimeout(()=>{
//         console.log("after 3 minutes")
// }, 3000)










function fetchUserDataSync() {
    alert("Fetching user data..."); // Blocks the code until the user clicks "OK"
    return { id: 1, name: "John Doe" };
}

console.log("Start fetching user data...");
const user = fetchUserDataSync(); // This blocks the rest of the code
console.log("User data:", user);
console.log("This message is blocked until user data is fetched.");





function getUserdate(callback) {
  setTimeout(() => {
    const user = { name: "fatima", age: 22 };
    callback(user);
  }, 1000); // ✅ added delay
}

console.log("start of beginner"); // ✅ runs first (synchronous)

getUserdate(function (user) {
  console.log(user); // ✅ runs after 1 second (asynchronous)
});

console.log("this message shows up"); // ✅ runs second (synchronous)



