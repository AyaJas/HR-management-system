'use strict';
//        ********** Task 7 ***********
/*
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
*/


//     ******** Task 8 *********

'use strict';

let employeeForm = document.getElementById("empForm");
console.log(employeeForm);


function Employee(fullName, department, level) {
    this.empId = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imagePath = `./assets/${this.fullName}.jpg`;
    this.salary = 0;
}

Employee.prototype.getEmpId = function () {
    this.empId = getRandomNumber();
}

Employee.prototype.render = function () {

    let div = document.createElement('div');
    employeeForm.appendChild(div);

    let img = document.createElement('img');
    div.appendChild(img);
    img.setAttribute('src', this.imagePath);
    img.setAttribute('alt', this.fullName);

    let ul = document.createElement('ul');
    div.appendChild(ul);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `FullName : ${this.fullName} - ID : ${this.empId} - Department: ${this.department} - Level: ${this.level}`;

}



function handelSubmit(event) {
    event.preventDefault();
    let name = event.target.name.value;

    let dept = document.getElementById("dept");
    let valuedept = dept.options[dept.selectedIndex].value;
    let textdept = dept.options[dept.selectedIndex].text;


    let lvl = document.getElementById("lvl");
    let valuelvl = lvl.options[lvl.selectedIndex].value;
    let textlvl = lvl.options[lvl.selectedIndex].text;

    let newEmp = new Employee(name, textdept, textlvl);

    newEmp.getEmpId();
    newEmp.render();


}


function getRandomNumber() {
    return Math.floor(1000 + Math.random() * 9000);
}


employeeForm.addEventListener('submit', handelSubmit);








