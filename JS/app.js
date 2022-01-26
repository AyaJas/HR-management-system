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


let employeeForm = document.getElementById("empForm");
let employeeSection = document.getElementById("employees");
console.log(employeeForm);
//console.log(employeeSection);
let allEmp = [];
checkLocalAndPush();



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

function render(empFromLS) {

    employeeSection.innerHTML = '';

    for (let i = 0; i < empFromLS.length; i++) {
            let div = document.createElement('div');
            employeeSection.appendChild(div);

            
            let img = document.createElement('img');
            div.appendChild(img);
            img.setAttribute('src', empFromLS[i].imagePath);
            img.setAttribute('alt', empFromLS[i].fullName);

            let ul = document.createElement('ul');
            div.appendChild(ul);
            let li = document.createElement('li');
            ul.appendChild(li);
            console.log(empFromLS[i].fullName);
            li.textContent = `FullName : ${empFromLS[i].fullName} - ID : ${empFromLS[i].empId} - Department: ${empFromLS[i].department} - Level: ${empFromLS[i].level}`;
    }
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
    
    allEmp.push(newEmp);

    let jsonArr = toJSON();

    saveToLocalS(jsonArr);

    render(readFromLocalS());


}

function getRandomNumber() {
    return Math.floor(1000 + Math.random() * 9000);
}


function checkLocalAndPush() {
    if (allEmp.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            allEmp = arr;
        }
    }
}

function readFromLocalS() {
    let jsonArr = localStorage.getItem('drinks');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
}


function toJSON() {
    let jsonArray = JSON.stringify(allEmp);
    return jsonArray;
}


function saveToLocalS(jsonArray) {
    localStorage.setItem('employees', jsonArray);
}


render(readFromLocalS());

employeeForm.addEventListener('submit', handelSubmit);








