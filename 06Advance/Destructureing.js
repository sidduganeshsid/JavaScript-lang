//destructuring on the arrays
const user = ["sid",9,"cse"]

var [name,rollNo,branch] = user;
console.log(name);
console.log(rollNo);
console.log(branch);


//destructuring the data on object
//this is most commonly used

const empData = {
    empName : "ramesh",
    empId : "Tex123",
    salary : 25000,

}


var {empName,empId,salary} = empData;

console.log(salary);