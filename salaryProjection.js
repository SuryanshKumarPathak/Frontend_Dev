// Q8. Employee Salary Projection

let salary = 20000; 
let incrementRate = 11; 
let projection = [];
for (let year=1;year<= 5;year++) {
    salary+=salary *(incrementRate / 100);
    projection.push({Year:year, Salary:Math.round(salary)});
}
console.table(projection);
