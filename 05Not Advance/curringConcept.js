
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
doAdditon()()() //curring