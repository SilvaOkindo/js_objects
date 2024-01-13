const body = document.querySelector('body');


window.onload = function() {
    changeColor();
}




function changeColor() {
    setTimeout(function() {
        body.style.backgroundColor = "green";
    }, 600);
}


const students = [
    {
        firstName: "John",
        secondName: "Doe",
        age: 12
    },
    {
        firstName: "Jane",
        secondName: "Doe",
        age: 20
    },
    {
        firstName: "Jack",
        secondName: "Doe",
        age: 21
    },
    {
        firstName: "Silva",
        secondName: "Doe",
        age: 20
    },

    {
        firstName: "Silvanus",
        secondName: "Okindo",
        age: 25
    }

]





function objectFunction() {

    students.forEach(function(student) {
        console.log(student.firstName);
    });


    students.forEach((student)=> {
        if(student.age > 20) {
            console.log(`${student.firstName} is ${student.age} years old`);
        }
    })


    students.filter((student)=> {
        if(student.firstName.startsWith("J")) {
            console.log(student.firstName.toUpperCase());
        }
    })


   const ageTotal = students.reduce((total, student)=>{
    return total + student.age;
   }, 0)

   console.log(`The total age is ${ageTotal}`)


   /// search student by name

   searchStudents(students);

}


const searchInput = document.querySelector("#search");

searchInput.addEventListener('input', ()=> {
    const searchTerm = searchInput.value.toLowerCase()
    const matched = students.filter((student) => {
        return student.firstName.toLowerCase().includes(searchTerm)
    });
    console.log(matched);
})


