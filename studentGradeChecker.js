let totalStudents = Number(prompt("How many students??"))
for(i=1 ; i<=totalStudents;i++){
    let marks = Number(prompt(`Enter student ${i} marks `))
     if (marks >= 80) {
        console.log(`Student ${i}: Grade A`);
    } else if (marks >= 60) {
        console.log(`Student ${i}: Grade B`);
    } else if (marks >= 40) {
        console.log(`Student ${i}: Grade C`);
    } else {
        console.log(`Student ${i}: Fail`);
    }

}