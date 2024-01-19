var firstName = "SidduGanesh"
var lastName = "Musa"
var phoneNumber = "+91 98833 93323"
var email = "sidduganeshengineer@gmail.com"
var password = "sid123"
var confirmPassword = "sid123"

var isEmail = true;
var isLoggedInGoogle = false
var isLoggedInFacebook = false
var isLoggedInApple = false
var isLoggedInX = false

var isLoggedIn;
if(isEmail||isLoggedInApple||isLoggedInFacebook||isLoggedInGoogle||isLoggedInX)
{
    isLoggedIn = true;
}else{
    isLoggedIn = false;
}

console.log(`
    Welcome, ${firstName} ${lastName}
    Your Phone Number is ${phoneNumber}
    Your Email Id is ${email}
    isLoggedin : ${isLoggedIn}
    
`)