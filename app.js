'use strict';

var a = '<pre>     </pre>';

function Employee(employeeId, fullName, department, level, salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imagePath = `./images/${this.fullName}.jpeg`;
    this.salary = salary;
}

Employee.prototype.render = function () {
    document.write(`<p> ${this.employeeId}   ${this.fullName}   ${this.department}</p>`);
}
document.write (a);
const AYA = new Employee(100, 'Aya Hamedat', ['CS'], ['Junior'], 1000);
AYA.render();
document.write (a);
function Level(levels, min ,max)
{
    this.levels = levels;
    this.min = min;
    this.max = max;
}

Level.prototype.getRandomSalary = function()
{
    var randomSalary = Math.floor(Math.random() * (this.max - this.min) + this.min);
    document.write(`</p> ${this.levels} Salary ${randomSalary} </p>`);
    
}

const senior = new Level("Senior", 1500 , 2000);
const midSenior = new Level("Mid-Senior", 1000 , 1500);
const junior = new Level("Junior", 500 , 1000);
var a1 = '<pre>   RandomSalary :  </pre>';
document.write (a1);
senior.getRandomSalary();
midSenior.getRandomSalary();
junior.getRandomSalary();
document.write (a);



Level.prototype.getNetSalary = function()
{
    var randomSalary = Math.floor(Math.random() * (this.max - this.min) + this.min);
    var ranInNet = `${(randomSalary * 7.5 * 0.01)}`;
    var netSalary = `</p> ${this.levels} Net Salary ${randomSalary - ranInNet } </p>`;
    document.write(netSalary);
}

var a2 = '<pre>   Net Salary :  </pre>';
document.write (a2);
senior.getNetSalary();
// midSenior.getNetSalary();
// junior.getNetSalary();


Employee.prototype.fullNameSalary = function () {
    document.write(`<p> FullName is  : ${this.fullName}  || Salary is: ${this.salary}</p>`);
}
document.write (a);
AYA.fullNameSalary();
document.write (a);

Employee.prototype.printData = function () {
    document.write(`<p> ${this.employeeId} | ${this.fullName} | ${this.department} | ${this.level} </p>`);
}

const emp1 = new Employee(1000, 'Ghazi Samer', ['Administration'], ['Senior']);
const emp2 = new Employee(1001, 'Lana Ali', ['Finance'], ['Senior']);
const emp3 = new Employee(1002, 'Tamara Ayoub', ['Marketing'], ['Senior']);
const emp4 = new Employee(1003, 'Safi Walid', ['Administration'], ['Mid-Senior']);
const emp5 = new Employee(1004, 'Omar Zaid', ['Development'], ['Senior']);
const emp6 = new Employee(1005, 'Rana Saleh', ['Development'], ['Junior']);
const emp7 = new Employee(1006, 'Hadi Ahmad', ['Finance'], ['Mid-Senior']);

document.write (a);
emp1.printData();
emp2.printData();
emp3.printData();
emp4.printData();
emp5.printData();
emp6.printData();
emp7.printData();

