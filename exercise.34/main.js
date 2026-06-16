// const list = document.querySelector("#list")
// console.log(list)



// function addItem(){
//     const newItem = document.createElement('li')

//     newItem.textContent= 'list three'

//     list.appendChild(newItem)
//     // console.log(newItem)
// }

// function removeItem(){
//     list.removeChild(list.lastChild)
// }



function changeImage(){
    const image = document.querySelector('#image');
 
    const url = prompt("enter your images")
    image.setAttribute('src', url)





}



function changeText(){
    const text =document.querySelector("#text");
    const love =document.querySelector("#desc");


    love.style.border= '3px solid green';
    text.style.color = "blue";
    love.style.backgroundColor= 'red';

}

function lightMode(){

    document.body.style.backgroundColor= 'white'
    document.body.style.color = 'black'
}


function darkMode(){
      document.body.style.backgroundColor= 'black'
    document.body.style.color = 'white'
}