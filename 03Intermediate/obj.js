var user = {
    firstName : "SidduGanesh",
    lastName : "Musa",
    role : "Admin",
    loginCount : 32,
    GoogleSignedIn : true
}

// . features is just like the access the object
console.log(user.firstName)
console.log(user["lastName"]);

user.loginCount = 44;

console.log(user.loginCount);

console.table(user)

//7 obj is recommended

