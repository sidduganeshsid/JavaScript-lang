const states = [
    "Telanagana",
    "Andhra Pradesh",
    1947,
    "Madya pradesh"
]

for (let index = 0; index < states.length; index++) {
    // const element = states[index];
    // console.log(states[index]);
    if(typeof states[index]!=="string") continue;
    console.log(states[index]);
}