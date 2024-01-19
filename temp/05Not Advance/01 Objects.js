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

                //below functional approach is not working. so to create obj use new keyword
var sidduganesh = new User("sidduganesh","musa","sidduganeshengineer@gmail.com",3);

console.log(sidduganesh);

var aakashganesh = new User("aakashganesh","musa","aakashganesh14@gmail.com",1);

console.log(aakashganesh);