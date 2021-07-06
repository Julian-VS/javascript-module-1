function printStudentsName(students){
    for (let i = 0; i < students.length; i++)
    {
        console.log(`El estudiante se llama ${students[i]}`);
    }
}

let students = ["Jesus", "Maria Victoria", "Julian"];
printStudentsName(students);
console.log(students[-2])