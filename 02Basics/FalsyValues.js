var user;
console.log(user);//undefined

var name = null;

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