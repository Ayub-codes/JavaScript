// let str = "hello world "

// let vowels = "AEIOUaeiou"
// let count = 0

// function printVowels(){
//     for(i=0;i < str.length;i++){
//         if(vowels.includes(str[i])){
            
            
            
//             console.log(str[i]);
            
//         }
//     }
// }

// printVowels()

//with arrow function

const vowelCount =(str)=>{
    let vowels = "AEIOUaeiou"
    let count = 0
    for(let char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}