let students = [
   {name : "Ayub", marks : 89},
   {name : "Kashan", marks : 90},
   {name : "Ukasha", marks : 40},
   {name : "Bakir", marks : 100},

];

students.forEach((val)=>{
    console.log(val);
    
})

let names = students.map((val)=>{
     return val.name
})

console.log(names);


let passNames = students.filter(val => val.marks > 50).map(val => val.name); 
      
console.log(passNames);

let passMarks = students.filter((val)=>{
    return val.marks > 50
}).map((val)=>{
    return val.marks
})

let sum = 0

passMarks.forEach((mark)=>{
    sum = sum + mark
})

let average = sum / passMarks.length
console.log(`The average of all class is ${average}`);


function Takename(){
    let name = prompt("Enter Student Name")
    let student = students.find((val)=>{
        return val.name.toLowerCase() === name.toLowerCase()
    });

    if(student){
    let status = student.marks > 50 ? "Passed" : "Failed"

        alert(`${student.name} has marks:${student.marks} and he is ${status}`)
    }else{
        alert("Not Found")
    }
}

Takename()

