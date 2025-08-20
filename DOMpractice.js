// let h2 = document.querySelector("h2")
// console.dir(h2);

// h2.innerText = h2.innerText + "  Apna Collage"

// let div = document.querySelectorAll(".box")

// div[0].innerText = "new unique value 1"

// div[1].innerText = "new unique value 2"

// div[2].innerText = "new unique value 3"

//with loop

let div = document.querySelectorAll(".box")
let idx = 1

for(let divs of div){
    divs.innerText = `the new unique value ${idx}`
    idx++
    
}
