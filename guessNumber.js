let gameNum = 29
let userNum = Number(prompt("guess the number"))

while(userNum!=gameNum){
    userNum=prompt("you enter wrong number.guess again")
}

console.log("congrs! you guess right number");
