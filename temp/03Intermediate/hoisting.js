function tipper(a)
{
    var bill = parseInt(a);
    console.log(bill+5);
}
tipper("5"); //10
// tipper("a"); //NaN

//variablish function
var bigTipper = function (a)
{
    var bill = parseInt(a);
    console.log(bill+15);
}
bigTipper("200"); //215

//below concept is called as codehoisting
console.log(name); //undefined
var name = "siddu";
console.log(name);


var user = "rama" //global context
function sayHello()
{
    var user = "sham"
    console.log(user);
}
console.log(user);
sayHello();
console.log(user);


//
// console.log(playera);
// console.log(playerb);

var playera = "sidduganesh";
if(true){
let playerb = "aakashganesh";
console.log("inside if :"+playerb);
}
console.log(playera);
console.log(playerb);//not accessible bcz of limited scope of let