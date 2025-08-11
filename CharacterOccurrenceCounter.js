let str = prompt("Enter String")
let char = prompt("Enter Letter")
let count=0

for(i = 0 ; i < str.length ; i++){
    if(str.charAt(i)==char){
        count++
        
    }
}

console.log(`the letter ${char} is come ${count} time`);
