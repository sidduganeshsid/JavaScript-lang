const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center")

//global obj       //property       //selector
// console.log(window.getComputedStyle(red).background);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// var orangeElementColor = getBGColor(orange);

// orange.addEventListener("mouseenter",()=>{
//     center.style.backgroundColor = orangeElementColor;
// });     //style to use/implement it
        //computedStyle to grab the elements

var magicColorChanger = (elements, color)=>{
    return elements.addEventListener("mouseenter",()=>{
        center.style.backgroundColor = color;
    });
}

magicColorChanger(red,getBGColor(red));
magicColorChanger(cyan,getBGColor(cyan));
magicColorChanger(violet,getBGColor(violet));
magicColorChanger(orange,getBGColor(orange));
magicColorChanger(pink,getBGColor(pink));
// magicColorChanger(red,getBGColor(red));