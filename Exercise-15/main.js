// const people=[
//     {  name:'fatima', age: 22, id: 'A12', birthday:'10-10-2003'},
//     {  name:'mahmed', age: 27, id: 'C12', birthday:'10-10-1999'},
// ]
// // console.log(people)
// // for (const key in people){
// //     console.log(people[key])
// // }

// // for (let people of people){
// //      console.log(people)
// // } 

// for(let person of people){
// console.log(person);{
//     for (const key in person){
//         console.log(`${key}: ${person[key]}`);
        
//     }
// }
// }


// const ColorSelect = document.querySelector("#ColorSelect");
// const selectedColor = document.querySelector("#selectedColor");


// ColorSelect.addEventListener("change" , function(){
//     console.log('change to' ,ColorSelect.value)
//     selectedColor.textContent = `selected Color: ${ColorSelect.value}`
// });


// const form = document.querySelector("#form");
// const error = document.querySelector("#error");


// form.addEventListener('submit', function(event){

// event.preventDefault ();

// const name = document.querySelector("#name").value;
// const email = document.querySelector("#email").value;
// const password = document.querySelector("#password").value;
// const confirmpassword = document.querySelector('#confirmPassword').value;

// if(name === ""){
//     error.textContent= "name required";
//     return 
// }

// const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// if(!email.match(emailpattern)){
//     error.textContent= "please enter your valid email address";
//     return
// }

// if(password.length < 8){
//   error.textContent = "please your password is 8 charcters"
//   return
// }

// if(password!== confirmpassword){
// error.textContent = "pleas inot much password"
// return
// }

// error.textContent ="register is successfully";

// });



const myForm = document.querySelector("#myForm");
const error = document.querySelector("#error");


myForm.addEventListener("submit", function(event){
event.preventDefault();

const name = document.querySelector("#name").value;
const email =document.querySelector("#email").value;
const password = document.querySelector("#password").value;
const confirmpassword =document.querySelector("#confirmPassword").value;





if(name === ""){
    error.textContent= "name required"
    return ;
}

const emailpettern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(!email.match(emailpettern)){
error.textContent= "enter your valid email address"
return
}


if(password.length < 8){
    error.textContent=" please enter password 8 characteries"
    return
}

if(password !== confirmpassword){
    error.textContent= "check password"
    return
}

error.textContent = "Register successfully";

})




