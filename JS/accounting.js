'use strict';


function Employee(fullName, department, level) {
    this.empId = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imagePath = `./assets/${this.fullName}.jpg`;
    this.salary = 0;
}

let employeeForm = document.getElementById("empForm");
let employeeSection = document.getElementById("employees");
console.log(employeeForm);
//console.log(employeeSection);
let allEmp = [];
checkLocalAndPush();


var min = [1500, 1000, 500];
var max = [2000, 1500, 1000];

Employee.prototype.getRandomSalary = function () {
    var randomSalary = 0;
    if (this.level == "Senior") {
        var randomSalary = Math.floor(Math.random() * (max[0] - min[0]) + min[0]);
    }
    else if (this.level == "Mid-Senior") {
        var randomSalary = Math.floor(Math.random() * (max[1] - min[1]) + min[1]);
    }
    else if (this.level == "Junior") {
        var randomSalary = Math.floor(Math.random() * (max[2] - min[2]) + min[2]);
    }
    return randomSalary;
}


Employee.prototype.getNetSalary = function () {

    var ranSal = this.getRandomSalary();
    var ranInNet = `${(ranSal * 7.5 * 0.01)}`;
    var netSalary = `${ranSal - ranInNet}`;
    return netSalary;
    // document.write(` The Net Salary for ${this.level} : ${netSalary}`);
}


Employee.prototype.getEmpId = function () {
    this.empId = getRandomNumber();
}

Employee.prototype.getEmpSal = function () {
    this.salary = this.getNetSalary();
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
        li.textContent = `FullName : ${empFromLS[i].fullName} - ID : ${empFromLS[i].empId} - Department: ${empFromLS[i].department} - Level: ${empFromLS[i].level}  ${empFromLS[i].salary}`;
    }
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
    let jsonArr = localStorage.getItem('employees');
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


//render(readFromLocalS());


//console.log(readFromLocalS());
//********************* Task 9 ***********************

///NEW SOL

function Department(name) {
    this.name = name;
    this.numOfEmp = 0;
    this.AvgSal = 0;
    this.totalEmp = 0;
    if (!allEmp.includes(this)) {
        allEmp.push(this);
    }
}

var DepartmentName = ["Administration", "Development", "Finance", "Marketing"];
var departmentNumber = []
var totalSalaryArr = []
let sumAdmin = 0; let sumDev = 0; let sumMark = 0; let sumFin = 0; let totalEmp = 0;
let avgSal = 0;
let arrSalAdm = []; let arrSalDev = []; let arrSalMark = []; let arrSalFin = []; let avgSalDept = [];
let jsonArr = localStorage.getItem('employees');
let arr = JSON.parse(jsonArr);
let DepArr = []
const tableB = document.getElementById("myTableData");


function renderTabel() {
    arrSalAdm = arr.filter(emp => { return emp.department == "Administration" });
    arrSalDev = arr.filter(emp => { return emp.department == "Development" });
    arrSalFin = arr.filter(emp => { return emp.department == "Finance" });
    arrSalMark = arr.filter(emp => { return emp.department == "Marketing" });
    departmentNumber.push(arrSalAdm.length);
    departmentNumber.push(arrSalDev.length);
    departmentNumber.push(arrSalFin.length);
    departmentNumber.push(arrSalMark.length);


    arrSalAdm.forEach(emp => {
        sumAdmin = sumAdmin + parseFloat(emp.salary);
    });

    arrSalDev.forEach(emp => {
        sumDev = sumDev + parseFloat(emp.salary);
    });

    arrSalFin.forEach(emp => {
        sumFin = sumFin + parseFloat(emp.salary);
    });

    arrSalMark.forEach(emp => {
        sumMark = sumMark + parseFloat(emp.salary);
    });

    totalSalaryArr.push(sumAdmin)
    totalSalaryArr.push(sumDev)
    totalSalaryArr.push(sumFin)
    totalSalaryArr.push(sumMark)

    var headerTr = document.createElement('tr');
    for (var i = 0; i <= 4; i++) {
        var headerTd = document.createElement('td');
        if (i == 0) {
            headerTd.innerHTML = "Department";
        }
        else {
            headerTd.innerHTML = DepartmentName[i - 1];
        }
        headerTr.appendChild(headerTd);
    }
    tableB.appendChild(headerTr);
    var numOfEmpTr = document.createElement('tr');

    for (var i = 0; i <= 4; i++) {
        var innerTd = document.createElement('td');  //#numOfEmp #totalSalary # avgSarlay
        if (i == 0) {
            innerTd.innerHTML = "#numOfEmp"
        } else {
            innerTd.innerHTML = departmentNumber[i - 1]
        }
        numOfEmpTr.appendChild(innerTd);

    }
    tableB.appendChild(numOfEmpTr);

    var totalSalaryTr = document.createElement('tr');

    for (var i = 0; i <= 4; i++) {
        var innerTd = document.createElement('td');
        if (i == 0) {
            innerTd.innerHTML = "total Salary"
        } else {
            innerTd.innerHTML =  Math.floor(totalSalaryArr[i - 1])
        }
        totalSalaryTr.appendChild(innerTd);

    }
    tableB.appendChild(totalSalaryTr);


    var avgSalaryTr = document.createElement('tr');

    for (var i = 0; i <= 4; i++) {
        var innerTd = document.createElement('td'); 
        if (i == 0) {
            innerTd.innerHTML = "Avg Salary"
        } else if( departmentNumber[i - 1] != 0 ){
            innerTd.innerHTML = Math.floor(totalSalaryArr[i - 1] / departmentNumber[i - 1])
        }
        else
        {
            innerTd.innerHTML = 0;
        }
        avgSalaryTr.appendChild(innerTd);

    }
    tableB.appendChild(avgSalaryTr);

};
renderTabel();