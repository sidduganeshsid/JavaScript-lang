
var testArray = [2,3,4,5,7,9,9,9];

// console.log(testArray.fill(0));
console.log(testArray.fill("h",2));
console.log(testArray.fill("a",3,5));

const myNum = [23,34,34,23,33 ,44,55, 77,98]
const result = myNum.filter((num)=>(num!=34));
console.log(result);


var users = 10;
var Users = "sid";
var USER = ["Ted","Tim","Sid","Tom"]
console.log(USER.slice(1,3));

            //start and count till remove and add
USER.splice(1,0,"Hai","BYE","JAI");
console.log(USER);