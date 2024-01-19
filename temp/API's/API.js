// fetch()
// .then()
// .catch()


//chain on to the above using .then() as many as you need
//to handling the all of +ve responses
//to handle -ve response

// fetch("https://api.chucknorris.io/jokes/random")

fetch("https://api.chucknorris.io/jokes/random")
.then((response)=>{
   return response.json();//log and check
})
.then((data)=>{
    // data log and check
    // console.log("DATA : ",data);
    var joke = data.value;
    console.log("JOKE:",joke);
})
.catch();

