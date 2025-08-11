let sentance = prompt("Enter sentance")
let reverse = sentance.split("").reverse().join("")
if (sentance === reverse){
    console.log("it is palindrome");
    
}else console.log("it is not palindrome");
