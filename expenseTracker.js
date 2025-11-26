// Q3. Monthly Expense Tracker
// Calculates total, average, and amount after 10% tax

let expenses = [5000, 1200, 8000, 2000, 1500]; 
let total = 0;
for (let i of expenses){
    total+=i;
}
let average = total / expenses.length;
let finalAmount = total;
finalAmount +=finalAmount*0.10; 
console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount After Tax:", finalAmount.toFixed(2));
    