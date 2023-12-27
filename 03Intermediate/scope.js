var name = "siddu ganesh"
console.log(name);

function sayHello()
{
    var name = "siddu"
    console.log(name);
    sayHelloTwo();

    function sayHelloTwo()
    {
        var name = "sid"
        console.log(name);
    }
}

sayHello();
