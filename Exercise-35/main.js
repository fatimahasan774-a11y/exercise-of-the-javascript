// const  button = document.querySelector("#myButton")
// const  removeButton = document.querySelector("#removeButton")

// function handleClick(){
//     console.log('click button')
// }

// button.addEventListener('click', handleClick);

// removeButton.addEventListener('click', function(){
// button.removeEventListener('click', handleClick);
// console.log('remove click event')
// })



const color = document.querySelector('#color');
const selectorcolor = document.querySelector('#selectorcolor');

color.addEventListener('change', function(){
    console.log('change is' ,color.value)
selectorcolor.textContent = `select color: ${color.value}`
})