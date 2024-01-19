// fetch()
// .then()
// .catch()


//chain on to the above using .then() as many as you need
//to handling the all of +ve responses
//to handle -ve response

// fetch("https://api.chucknorris.io/jokes/random")

fetch("https://api.monkeytype.com/users/sidduganesh/profile")
.then((response)=>{
   console.log(response.json());//log and check
})
.then((data)=>{
    
    // Assuming "data" is the provided JSON object
if (data && data.personalBests && data.personalBests.time && data.personalBests.time[60] && data.personalBests.time[60][0]) {
    const wpmValue = data.personalBests.time.[60][PersonalBest].wpm;
    console.log(wpmValue);
  } else {
    console.error("Unable to retrieve the WPM value. Check the structure of the JSON object.");
  }
})
.catch();


  