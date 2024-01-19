// function isEven(elem)
// {
//     if(elem%2==0)
//     {
//         return true;
//     }
//     return false;
// }

// console.log(isEven(3))


// function isEven(elem)
// {
//     return elem%2==0;
// }


// var isEven = function (elem)
// {
//     if(elem%2==0)
//     {
//         return true;
//     }
//     return false;
// }

// console.log(isEven(3))

//below code is arrow function
//arrow function must require the return keyword
var isEven = (elem) =>
{
    if(elem%2==0)
    {
        return true;
    }
    return false;
}

console.log(isEven(3))

                        //callback
var result = [2, 6, 8 ,10].every(isEven);
console.log(result);

//map and filter.

//callbacks funtion doesn't have name

//if u want to remove return then don't use return keyword.
var res = [1,3,5].every((e) => e%2===1)
console.log(res);

var res = [1,3,5].every((e) => (e%2===1))
console.log(res);