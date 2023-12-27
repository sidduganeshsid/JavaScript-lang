const names = ["youtube","fb","Insta","netflix","Amaon"];

for(const n of names)
{
    console.log(n);
}

//used in Angular fw

const symbols = {
    yt : "youtube",
    ig : "Instagram"
}

for(const n in symbols)
{
    console.log(`key is ${n} and value is :${symbols[n]}`);
}