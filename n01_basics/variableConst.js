const accountId = 12345
let accountEmail = "sidduganeshsa@gmail.com"
var accountPassword = "54321"
accountCity = "Hyderabad"
let accoutState; //undefined


// accountId = 13 //const variable can't be reassigned //not allowed
console.log(accountId);

accountEmail = "aakash@gmail.com"
accountCity = "Bengaluru"

console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accoutState])

//below blocks are called as scope
//earlier days it was a problem //so they introducted let keyword.
{

}
/*
never user var (p)
because of issue in block scope and functional scope

mostly recommanded is let and const
without it is also possible.
*/