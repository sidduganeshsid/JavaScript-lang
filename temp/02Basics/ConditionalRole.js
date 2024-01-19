//create an application with following roles;
//admin - gets full access
//sub admin - gets access to create/delete the courses
//testprep - get access to create/delete tests
//user - gets access to consume content

var user = "admin"

switch (user) {
    case "admin": console.log("You get full access");
                
    // case "subadmin": return console.log("you get access to create and delete the course");
    // break;
    case "subadmin" : console.log("you get access to create and delete the course");
    case "testprep" : console.log("you get access to create/delete the courses")
    case "user" : console.log("you get access to consume the courses");
                    break;


    default: console.log("Trial User");
        break;
}