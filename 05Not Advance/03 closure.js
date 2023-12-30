// function init()
// {
//     var firstName = "sid"
//     console.log("I'm init()");
//     function sayHai()
//     {
//         console.log(firstName);
//     }
//     //execution context doesn't get's clean up because of reference of function
//     return sayHai;
// }

// var value = init();

// value();

function doAdditon(x)
{
    return function(y)
    {
        return x+y;
    }
}


//below code is possible bcz of memory and closures
var add5 = doAdditon(4);
console.log(add5(10));

console.log(doAdditon(10)(23));