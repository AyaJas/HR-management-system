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
let countAdmin = 0; let countDev = 0; let countMark = 0; let countFin = 0; let totalEmp = 0; 
let avgSal = 0; 
let arrSalAdm = []; let arrSalDev = []; let arrSalMark = []; let arrSalFin = [];let avgSalDept = [];
let jsonArr = localStorage.getItem('employees');
let arr = JSON.parse(jsonArr);

for(var i =0; i< arr.length;i++)
{
    var ay = Object.entries(arr[i]);
    //console.log(ay);
    var by = Object.values(ay[2]);

    var sy = Object.values(ay[5]);
    var syAvg = sy[1];

    //Department Name
    console.log(by[1]);
    //#of Employees;
    if (by[1] == "Administration")
    {
        countAdmin++;
        arrSalAdm.push(syAvg);
        avgSalDept.push(syAvg);
    }
    else if (by[1] == "Development")
    {
        countDev++;
        arrSalDev.push(syAvg);
        avgSalDept.push(syAvg);
    }
    else if (by[1] == "Marketing")
    {
        countMark++;
        arrSalMark.push(syAvg);
        avgSalDept.push(syAvg);
    }
    else if (by[1] == "Finance")
    {
        countFin++;
        arrSalFin.push(syAvg);
        avgSalDept.push(syAvg);
    }
}

//all Emp

//console.log(avgSalDept);
var avgSalDepts = avgSalDept.map(i=>Number(i));
console.log(avgSalDepts);
var totalSalary = 0; var sum = 0; var totalSalary = 0; 
for(var j = 0; j < avgSalDepts.length ; j++)
{
    totalSalary = totalSalary + avgSalDepts[j];
    sum = totalSalary / avgSalDepts.length;
}
console.log("Avg Salary for All Employees :" + sum);
console.log("Total Salary for All Employees :" + totalSalary);
///admin

//console.log(arrSalAdm);
var avgSalAdms = arrSalAdm.map(i=>Number(i));
//console.log(avgSalAdms);
var totalSalAdm = 0; var sumAdm = 0;
for(var j = 0; j < avgSalAdms.length ; j++)
{
    totalSalAdm = totalSalAdm + avgSalAdms[j];
    sumAdm = totalSalAdm / avgSalAdms.length;
}
console.log("Avg Salary for Admin : "+sumAdm);
console.log("Total Salary for Admin :" + totalSalAdm);


//Development

//console.log(arrSalDev);
var arrSalDevs = arrSalDev.map(i=>Number(i));
//console.log(avgSalAdms);
var totalSalDev = 0; var sumDev = 0;
for(var j = 0; j < arrSalDevs.length ; j++)
{
    totalSalDev = totalSalDev + arrSalDevs[j];
    sumDev = totalSalDev / arrSalDevs.length;
}
console.log("Avg Salary for Development : "+sumDev);
console.log("Total Salary for Development : " + totalSalDev);

//Marketing

//console.log(arrSalMark);
var arrSalMarks = arrSalMark.map(i=>Number(i));
//console.log(avgSalAdms);
var totalSalMrk = 0; var sumMark = 0;
for(var j = 0; j < arrSalMarks.length ; j++)
{
    totalSalMrk = totalSalMrk + arrSalMarks[j];
    sumMark = totalSalMrk / arrSalMarks.length;
}
console.log("Avg Salary for Marketing : "+sumMark);
console.log("Total Salary for Marketing : " + totalSalMrk);

//Finance

//console.log(arrSalFin);
var arrSalFins = arrSalFin.map(i=>Number(i));
//console.log(avgSalAdms);
var sumSalFin = 0; var sumFin = 0;
for(var j = 0; j < arrSalFins.length ; j++)
{
    sumSalFin = sumSalFin + arrSalFins[j];
    sumFin = sumSalFin / arrSalFins.length;
}
console.log("Avg Salary for Finance : "+sumFin);
console.log("Total Salary for Finance : " + sumSalFin);


console.log(countAdmin);
console.log(countDev);
console.log(countMark);
console.log(countFin);

totalEmp = countAdmin + countDev + countMark + countFin ;
console.log("Number Of Employees : " + totalEmp);


Employee.renderTab = function(){

    const tableB = document.getElementById(myTableData);
    // allEmp.forEach(item => {
    //     tableB.innerHTML+=
    //     <tr><th>${totalEmp}</th>
    //     <td>${countAdmin}</td>
    //     <td>${countDev}</td>
    //     <td>${countMark}</td>
    //     <td>${countFin}</td>
    //     <td>${totalEmp}</td>
    // </tr>
    // });
};

this.renderTab();