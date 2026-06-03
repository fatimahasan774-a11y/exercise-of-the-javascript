function fetchUserDatasync(){
    alert("fetch user data...");
    return {id: 22, name: "john done"}

}
    console.log("starting...");
    const user = fetchUserDatasync();
    console.log("User data:", user);
    console.log("this messge is blocking until user data is fetched");


// setTimeout((callback)=>{
//      console.log("after 4 minutes")
// },4000)


function getUserDate(callback){
        setTimeout((callback)=>{
     console.log("after 4 minutes")
},4000)
}

console.log("starting")

getUserDate()
console.log("this message")
