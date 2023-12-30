// three dots followed by anything is called as the spread or rest operator

// var returnedValue = Math.max(2, 5, 7, 4, 2, 8);
// console.log(returnedValue);

// var myObj = {};

// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
// console.log(myObj);


function sumOne(a,b)
{
    return a+b;
}

var myArr = [2,3]
console.log(sumOne(...myArr));//spread operator
//takes the group and spreads into multiple values 


function sumTwo(...args) //rest operator
{
    console.log(args);
    let sum = 0
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumTwo(3,4,5,5));
///////////////////
function sumTwo(a,b, ...args) //rest operator
{
    console.log(args);
    let multi = a*b;
    let sum = 0
    for (const arg of args) {
        sum += arg;
    }
    return [sum,multi];
}

console.log(sumTwo(3,4,5,5));
