const express = require('express');

const app = express()

const port = 3001;

//List of student JSon details
let student = {regno : '2021/ICT/73',name :'Vino', age :23,course : 'IT',skills : ['java',"JS",'c++']}
console.log(student)
console.log(student.name)


let students = [
{regno : '2021ICT96', name : 'Keerthana', age : 23 ,course : 'IT',gender : "Female"},
{regno : '2021ICT88', name : 'Jathu', age : 22 ,course : 'IT',gender : "Female"},
{regno : '2021ICT73', name : 'Vino', age : 23 ,course : 'IT',gender : "Female"},
{regno : '2021ICT97', name : 'Kumuthini', age : 23 ,course : 'IT',gender : "Female"}
]

console.log(students)


app.get('/stu',(req,res)=>{
    res.send(students);
});

app.get('/stu:id',(req,res)=>{
    const id =req.params.id
    const result = students.map((student)=>student.id==id);
    res.send(result);
});

app.get('/stu:id',(req,res)=>{
    const regno =req.params.regno
    console.log(regno)
    const result = students.find((student)=>student.regno==regno);
    //check student is available or not, if not return an error message
if (result)
    {
        res.send(result);
    }
    else
    {
        res.status(404).send("student not found");
    }
    
   
});


//filter students by gender

app.get('/stu/gender/:gen',(req,res)=>{
    const gender =req.params.gen
    console.log(gender)
    const result = students.filter((student)=>student.gender==gender);
    res.send(result);
});


app.listen(port,()=>
{
    console.log(`server is running on ${port}`);
})