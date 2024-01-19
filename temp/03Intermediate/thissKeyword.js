//this
//= for all regular function calls, this points to window object
//study about __proto__

console.log(this);

var user = {
    name : "sidduganesh",
    courseCount : 0,

    getCourseCount: function(){
        console.log("Line 7",this);
        //below code is called regular function call
function sayHello()
{
    console.log("hello");
    console.log("LINE 17",this);
}
sayHello();
    }
    
}
//object function calls
user.getCourseCount();


//below code is called regular function call
function sayHello()
{
    console.log("hello");
}
sayHello();