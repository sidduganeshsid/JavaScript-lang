var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

// counter.innerHTML = 1002;

let count = 1;

setInterval( //conditional you can use
    () => {
        count++
        counter.innerText = count;
    },1
)
//vanilla js is good for like this..
setTimeout(()=>{
    followers.innerHTML = "Followers on Instagram";
},5000)