let num = prompt("Enter num")
let arr = []

for(let i=1;i<=num;i++){
    arr[i-1] = i
}
let sum = arr.reduce((res,curr)=>{
    return res+curr
})

console.log(arr);

console.log(`The sum of nums in array is:${sum}`);

let mult = arr.reduce((res,curr)=>{
    return res*curr
})

console.log(`The multiply of nums in array is:${mult}`);