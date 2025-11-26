// Q2. Multi-Type Data Summary
// Demonstrates different data types and prints them using console.table()

let userName = "Suryansh";          
let age = 21;                       
let isStudent = true;                
let skills = ["Data Analytics","Python","Java"]; 
let details = { city: "Buxar",
    District:"Bihar"
 };   
let emptyValue = null;               
let notAssigned;                     

console.table({
    userName: { value: userName, type: typeof userName },
    age: { value: age, type: typeof age },
    isStudent: { value: isStudent, type: typeof isStudent },
    skills: { value: skills, type: Array.isArray(skills) ? "array" : typeof skills },
    details: { value: details, type: typeof details },
    emptyValue: { value: emptyValue, type: typeof emptyValue }, 
    notAssigned: { value: notAssigned, type: typeof notAssigned }
});
