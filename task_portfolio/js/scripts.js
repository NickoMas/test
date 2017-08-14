
let heroUnit = document.querySelector(".heroUnit");
let aboutUnit = document.querySelector(".aboutUnit");
let worksUnit = document.querySelector(".worksUnit");
let contactUnit = document.querySelector(".contactUnit");

let viewPHeight = document.documentElement.clientHeight;

const panels = [...document.querySelectorAll(".panel")];

//lift all blocks on maximal height from row, move behind the clicked one, which one is being lowered
const liftAll = function () {

    const heights = panels.map((item) => {
        return parseFloat(getComputedStyle(item).height);
    });

    panels.forEach((item) => {
        item.style.top = `-${Math.max(...heights)}px`;
        item.style.zIndex = 0;
    }) ;
}

//works with the selected panel
const shiftUnit = function (unit) {
    let className = unit.className.slice(0, -4); // slice part of name to use as class name
    let selectedUnit = document.querySelector(`.${className}`);
    
    liftAll();

    selectedUnit.style.zIndex = "10";
    selectedUnit.style.top = '0px';
}

 
//track click, route to handler with argument
const shift = function (e) {
    switch(e.target){
        case heroUnit: return shiftUnit(heroUnit);
        case aboutUnit: return shiftUnit(aboutUnit);
        case worksUnit: return shiftUnit(worksUnit);
        case contactUnit: return shiftUnit(contactUnit);

        default : return console.log('NO!') //remove
    }
}

document.querySelector(".wrapper").addEventListener("click", shift)

//intro animation
window.addEventListener("load", (e) => {
    liftAll()

    document.querySelector(".backdrop h1").style.opacity = 1;
    let customClick = new Event("click", {"bubbles": true});

    setTimeout(() => {
        document.querySelector(".backdrop h1").style.opacity = 0;
    }, 1500)

    setTimeout(() => {
        document.querySelector(".backdrop").style.zIndex = "-10";
        heroUnit.dispatchEvent(customClick);
    }, 3000)

})


