let arr = [2,3,4,7,24,56,77,75,78,95]

let even = []
let odd = []

for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even.push(arr[i])
        
    }else if(arr[i]%2!=0){
        odd.push(arr[i])
        
    }

}

console.log(`The even num in array is:${even}`);
console.log(`The odd num in array is:${odd}`);
