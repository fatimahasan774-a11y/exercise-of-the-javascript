// let user={
//  id : 1,
//  name : "fatima",
//  city: "hargeisa"
// }
// console.log(user)

// let jsonsring =JSON.stringify(user)
// console.log(jsonsring)
// let parse =JSON.parse(jsonsring)
// console.log(parse)

async function getUserData(){
    console.log("strating fetch user data");
    let response=await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log("response:" ,data);
     
}
getUserData()


