// var obj = new Object();
// obj.

//Maps are not objects

var family = new Map();

//inserting the key: values into the map
family.set(1, "Masa Jyothi");
family.set(2, "Musa Srinivas");
family.set(3, "Musa Siddu Ganesh");
family.set(4, "Musa Aakash Ganesh");

console.log(family);

//
for(let elem of family)
{
    console.log(elem);
}


//SPANISH

var myMap = new Map();
myMap.set(1,"Uno");
myMap.set(2,"dos");
myMap.set(3,"tres");
myMap.set(4,"cuatro")

for(let key of myMap.keys())
{
    console.log(`key is ${key}`);
}

for(let value of myMap.values())
{
    console.log(`value is ${value}`);
}

for (const [key,value] of myMap) {
    console.log(`key is ${key} and value is ${value}` );
}

myMap.forEach((value, key) => {
    console.log(value + " " + key);
});

console.log(myMap.delete(2));

myMap.forEach((value, key) => {
    console.log(value + " " + key);
});

//more about maps