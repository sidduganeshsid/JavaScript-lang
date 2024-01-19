/*
define a funcitn that can answer the role of a user
A user can be on following roles;
admin = with all access
sub admin = with access to create/delete courses
testprep = with access to create/delete tests
user = consume all content
other  = trial user

Input: getUserRole(name, role)
*/

// function getUserRole(name, role)
// {
//     switch (role) {
//         case "admin":
//             return `${name} is admin will all access`
//         case "subadmin":
//             return `${name} is sub-admin will get access to create/delete the courese`
//             break;// this is not necessary
//         case "testprep":
//             return `${name} is testprep will get access to create/delete the tests`
//         case "user" : 
//             return `${name} is user to consume the content`

               
//         default:
//             return `${name} is unverified user, can Trial the website`
//             break;
//     }
// }

// function getUserRole(name, role)
// {
//     switch (role) {
//         case "admin":
//             return `${name} is admin will all access`
//         case "subadmin":
//             return `${name} is sub-admin will get access to create/delete the courese`
//             break;// this is not necessary
//         case "testprep":
//             return `${name} is testprep will get access to create/delete the tests`
//         case "user" : 
//             return `${name} is user to consume the content`

               
//         default:
//             return `${name} is unverified user, can Trial the website`
//             break;
//     }
// }

//below code is mostly used in FP programming like angular and react framework
var getUserRole = function (name, role)
{
    switch (role) {
        case "admin":
            return `${name} is admin will all access`
        case "subadmin":
            return `${name} is sub-admin will get access to create/delete the courese`
            break;// this is not necessary
        case "testprep":
            return `${name} is testprep will get access to create/delete the tests`
        case "user" : 
            return `${name} is user to consume the content`

               
        default:
            return `${name} is unverified user, can Trial the website`
            break;
    }
}

console.log(getUserRole("siddu","admin"));
console.log(getUserRole);