//Strings are the important conceps in the programming
//string in js are not as much powerfull as the java and python
//but works fine

var firstName = 'sidduganesh';//not good practice
var lastName = "Musa" //good practice
var email = `sidduganeshengineer@gmail.com` //better

var data = `It's my phone ` //aphostorphy is possible easily
var info = "engineer's"
var info2 = 'engineer\'s'
console.log(info);
console.log(info2);

//inbuilt methods inside the string

console.log(firstName.toLowerCase());
console.log(lastName.toUpperCase())
console.log(email.includes("@"));
console.log(lastName.startsWith('M'))
console.log(firstName.charAt(0));