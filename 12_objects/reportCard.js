// Challenge: Student Report Card Generator 🎓
// 👇 Create this:
// Create a student object:
// Write a function generateReportCard(student) that:
// Prints name, rollNo
// Calculates total marks
// Calculates percentage
// Gives grade:
// 90+ A
// 75–89 B
// 50–74 C
// Below 50: Fail 😢

const studentDetails = {
    name: "Ghost",
    rollNo: 22,
    marks: {
        Math: 80,
        English: 85,
        Science: 77
    }
}

const getTotalMarks = (marks) => {
    let totalMarks = 0;
    let fullMarks = 0;
    for(let key in marks) {
        totalMarks += marks[key];
    }
    return totalMarks;
}

const getFullMarks = (marks) => {
    return Object.keys(marks).length * 100;
}

const getGrade = (percentage) => {
    if(percentage >= 90) return "A"
    else if(percentage >= 75 && percentage <= 89) return "B";
    else if(percentage >= 50 && percentage <= 74) return "C";
    else return "Fail";
}

const generateReportCard = (student)=> {
    let totalMarks = getTotalMarks(student.marks);
    let percentage = Math.round(totalMarks * 100 / getFullMarks(student.marks))
    let grade = getGrade(percentage);

    console.log(`Report card: \n Name: ${student.name} \n rollNo: ${student.rollNo} \n Total marks: ${totalMarks} \n Percentage: ${percentage}% \n Grade: ${grade}`)
}

generateReportCard(studentDetails);
