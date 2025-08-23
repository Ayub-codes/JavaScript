let newBtn = document.createElement("button")
newBtn.innerText = "click me!"

let div = document.querySelector("body")
div.prepend(newBtn)

newBtn.style.backgroundColor = "red"
newBtn.style.color = "white"