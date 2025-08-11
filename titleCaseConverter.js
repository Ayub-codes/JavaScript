let str = prompt("Enter String");
let words = str.split(" ");
words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

let result = words.join(" ");

console.log(result);


