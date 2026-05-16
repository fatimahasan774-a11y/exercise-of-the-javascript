const people=[
    {  name:'fatima', age: 22, id: 'A12', birthday:'10-10-2003'},
    {  name:'mahmed', age: 27, id: 'C12', birthday:'10-10-1999'},
]
// console.log(people)
// for (const key in people){
//     console.log(people[key])
// }

// for (let people of people){
//      console.log(people)
// } 

for(let person of people){
console.log(person);{
    for (const key in person){
        console.log(`${key}: ${person[key]}`);
        
    }
}
}


