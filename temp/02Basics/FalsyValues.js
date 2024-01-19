console.log(user);//undefined
var user;
console.log(user);//undefined

var name = null;
console.log(name);//null
var str = '';
console.log(str);//empty string
str = "";
console.log(str);//empty string
console.log(4/0);//infinity
// console.log(a);//not defined
var b;
console.log(b/4);//NaN

if(null)
{
    console.log("condition is true");
}

console.log(2+2)
console.log("2"+2)
console.log(2+"2")

//below code is called coersion
var user1 = "2";
if(2 == user1)
    console.log("condition is true, 2 is equal")

//strictly checking
    if(2 === user1)
    console.log("strict check,condition is true, 2 is equal")