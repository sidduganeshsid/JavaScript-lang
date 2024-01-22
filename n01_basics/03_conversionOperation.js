let score1 = 34; //counter game other games..
//mario, super mario, pokemon

console.log(typeof score1);
console.log(typeof(score1));
// const {score} = req.body

score1 = "54";
let valueInNumber2 = Number(score1);//convert into the number type
console.log(typeof score1);
console.log(typeof valueInNumber2);

let isLoggedin = false;
console.log(isLoggedin);
console.log(typeof isLoggedin);

let isAlive = "";
// let ConvertingToBool = Boolean(score);
let ConvertingToBool = Boolean(isAlive);
console.log(typeof ConvertingToBool);
console.log(ConvertingToBool);
console.log(typeof isAlive);
/////////////////////////////////////////////////
let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
console.log(2**3);  //8
// console.log(2/3);
// console.log(2%3);

// console.log(2 to power 3); //error

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3); //2

console.log(+true); //1
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion