let str = prompt("Enter String");
let count = 0;
let vowels = "aeiouAEIOU";

for(let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])) {
        count++;
        console.log("vowel found:", str[i]);
    }
}

console.log("total vowels:", count);

