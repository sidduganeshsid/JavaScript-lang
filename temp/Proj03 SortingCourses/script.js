prompt("js linked");

const courses = [
    {
        name:"Java course",
        price: "899",
    },
    {
        name:"JavaScript course",
        price: "499",
    },
    {
        
       name : "Complete ReactJS course",
       price : "699",
    },
];


{/* <ul class="list-group">
<li class="list-group-item">
  Javascript course<span class="float-right">$2.1</span>
</li>
// </ul> */}
function generateLIST(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right");

        const price = document.createTextNode("₹"+course.price)
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)
    });
}

// generateLIST();
// or
window.addEventListener("load",generateLIST);

const button = document.querySelector(".sort-btn");

button.addEventListener("click", ()=>{
    courses.sort((a,b)=>a.price - b.price)
    generateLIST();

})

const buttonPrime = document.querySelector(".btn-primary")

buttonPrime.addEventListener("click",()=>{
    courses.sort((a,b)=>b.price - a.price)
    generateLIST();
})