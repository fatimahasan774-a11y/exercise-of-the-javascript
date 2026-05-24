let num1=[1,2,3];
let num2=[...num1, 4,5,6];
console.log(num2)

function multi(numbers){
    return numbers.reduce((total,num)=> total*num,1)
}
console.log(multi([5,5,5]));