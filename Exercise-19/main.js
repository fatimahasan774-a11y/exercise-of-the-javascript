// let  fruits= ['Apple', 'Banana', 'cherry'];
// fruits.forEach((fruit)=>{
//     console.log('i like ' + fruit)
// })

// console.log('--------------')

// fruits.forEach(function(fruit){
//             console.log('i like ' + fruit)
// })


let numbers=[1,2,3,4,5];
numbers.forEach((number)=>{
    console.log('number: ' + number)
})

let numbers=[1,2,3,4,5];
const squerNumbers=(numbers.map)(num =>num*2);{
    console.log(squerNumbers);
}