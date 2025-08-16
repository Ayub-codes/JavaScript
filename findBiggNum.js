let num = [300,34,67,86,354,64]

let max = num[0]

for(i=1;i<num.length;i++){
    if(num[i] > max){
        max = num[i]
    }
}
console.log(`the largest num is : ${max}`);
