// import User from "./classjs.js" 

const User = require("./classjs.js");

const sid = new User("sidduganesh","sidduganeshengineer@gmail.com");
console.log(sid.getInfo());

sid.enrollCourses("core Java");
console.log(sid.getCourseList());

let courses = sid.getCourseList();

courses.forEach( (course) => console.log(course));