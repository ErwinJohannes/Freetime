const fs = require('fs');

// Grade scale
const gradeScale = {'A': 4, 'B': 3, 'C': 2, 'D': 1, 'F': 0};

// Function to calculate GPA
function calculateGPA(grades) {
    let totalPoints = 0;
    let totalCourses = 0;
    for (let grade of grades) {
        totalPoints += gradeScale[grade.grade] || 0;
        totalCourses++;
    }
    return totalPoints / totalCourses || 0;
}

// Read data from students.json file
fs.readFile('students.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    
    const students = JSON.parse(data);

    // Calculate and display GPA for each student
    students.forEach(student => {
        const name = student.name;
        const grades = student.grades;
        const gpa = calculateGPA(grades);

        console.log(`Student: ${name}`);
        grades.forEach(grade => {
            console.log(`- ${grade.course}: ${grade.grade}`);
        });
        console.log(`GPA: ${gpa.toFixed(2)}\n`);
    });
});
