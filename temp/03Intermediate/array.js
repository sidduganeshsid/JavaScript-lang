// var name;
// var name2;
// var name3;

var countries = ["India","USA","Japan","Russia"];

var states = new Array("Rajasthan","Telangana","Delhi","Mumbai");

console.log(states[1]);

//. gives access to whole lot of methods
console.log(states.length)

states[0] = "punjab";

console.log(states);

var user = ["sid","suji","james",3,4];
console.log(user);

user.pop();//last value gets deleted
console.log(user);

//adds the value at front of array
 user.unshift("NEW VALUE");
 console.log(user);

 //removes the element
 user.shift();
 console.log(user)

 //used to build todo list,tshirt or any other
console.log(user.indexOf(3));

//not there

console.log(user.indexOf("newy"));

//to convert string to array
console.log(Array.from("siddu"))