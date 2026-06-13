// async function fetchData(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");

// const { jsxs } = require("react/jsx-runtime");""


//         if(!response.ok){
//             throw new Error('http error! status: ${response.status}');
//         }

//         c

//     }catch(error){

//     }
// }
// fetchData();



async function  fetchdata(){
    try{
        console.log("starting fetch date");

        const response  =await fetch("https://jsonplaceholder.typicode.com/posts");

         console.log(response);

         if(!response.ok){
            throw new Error(`"http error "{response.satus}`)
         }
             const data = await response.json();
             console.log("posted data",data);

    }catch(error){
        console.log("data is failed" , error);
    }
    }

    fetchdata()





//   async function postData(){
//     try{
//         const response =await fetch('https://jsonplaceholder.typicode.com/posts',{
//             method: "post",
//             headers: {
//                 'content-type': 'application/json'
//              },
//              body: JSON.stringify({
//                 title: 'foo',
//                 body: 'bar',
//                 userId: 1,
//              })
//         });
//         if(!response.ok){
//             throw new   Error(`"hhtp error" ${response.status}`)
//         }

//         console.log("before json", response)

//         const data =await response.json();
        
//             console.log("after json", data);
//     }catch(error){
//         console.log(error)
//     }
//   }


// postData()