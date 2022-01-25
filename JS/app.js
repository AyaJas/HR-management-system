'use strict';

function Employee(employeeId, fullName, department, level) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imagePath = `./images/${this.fullName}.jpeg`;
    this.salary = 0;
}

var min = [1500 , 1000 , 500];
var max = [2000 , 1500 , 1000];

Employee.prototype.getRandomSalary = function () {
    var randomSalary = 0;
    if (this.level == "Senior") {
        var randomSalary = Math.random() * (max[0] - min[0]) + min[0];
    }
    else if (this.level == "Mid-Senior") {
        var randomSalary = Math.random() * (max[1] - min[1]) + min[1];
    }
    else if (this.level == "Junior") {
        var randomSalary = Math.random() * (max[2] - min[2]) + min[2];
    }
    return randomSalary;
}


Employee.prototype.getNetSalary = function()
{
    
    var ranSal = this.getRandomSalary();
    var ranInNet = `${(ranSal * 7.5 * 0.01)}`;
    var netSalary = `${ranSal - ranInNet}`;
    return netSalary;
   // document.write(` The Net Salary for ${this.level} : ${netSalary}`);
}

Employee.prototype.fullNameSalary = function () {
    var sal = this.getNetSalary();
    document.write(`<p> FullName is  : ${this.fullName}  || Salary is: ${sal}</p>`);
}


const AYA = new Employee(100, 'Aya Hamedat','CS','Mid-Senior');
//AYA.getNetSalary();
document.write(`The Net Salary is : ${AYA.getNetSalary()}`);
AYA.fullNameSalary();

Employee.prototype.printData = function () {
    var sal = this.getNetSalary();
    document.write(`<p> ${this.employeeId} | ${this.fullName} | ${this.department} | ${this.level} | ${sal} </p>`);
}

const emp1 = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior');
const emp2 = new Employee(1001, 'Lana Ali', 'Finance', 'Senior');
const emp3 = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior');
const emp4 = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior');
const emp5 = new Employee(1004, 'Omar Zaid', 'Development', 'Senior');
const emp6 = new Employee(1005, 'Rana Saleh', 'Development', 'Junior');
const emp7 = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior');

emp1.printData();
emp2.printData();
emp3.printData();
emp4.printData();
emp5.printData();
emp6.printData();
emp7.printData();
