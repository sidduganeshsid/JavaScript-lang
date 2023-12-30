//proto types first letter is declared as capital

//below is correct proto type
var User = function(firstName,lastName,email,courseCount){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.courseCount = courseCount;

    this.getCourseCount = function(){
        console.log(`course count is: ${this.courseCount}`)
    }

}
//without touching the actual function. Injecting the properties
User.prototype.getFirstname = function(){
    console.log(`you firstname is : ${this.firstName}`);
}// above prototype like that code is used in the TypeScript
//every thing that is available in the prototype you can actually overriden it.


                //below functional approach is not working. so to create obj use new keyword
var sidduganesh = new User("sidduganesh","musa","sidduganeshengineer@gmail.com",3);
// console.log(User.getFirstname); //wrong stmt
sidduganesh.getCourseCount();
sidduganesh.getFirstname();

var aakashganesh = new User("aakashganesh","musa","aakashganesh14@gmail.com",1);
aakashganesh.getCourseCount();
aakashganesh.getFirstname();
