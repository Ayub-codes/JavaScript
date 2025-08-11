let password = prompt("Enter password")
let passCheck = password.length>=8
let hasUpper = /[A-Z]/.test(password)
let hasNumber = /[0-9]/.test(password)

if (passCheck&&hasUpper&&hasNumber){
    console.log("strong password");
    
}else if((passCheck&&hasUpper) || (passCheck&&hasNumber) || (hasUpper&&hasNumber)){
    console.log("Medium Password");
    
}else{
    console.log("Weak Password");
    
}


