let currentOffset = 0;
let panel = document.querySelector(".panel");
let step = parseInt(getComputedStyle(panel).minHeight);
let navBalls = document.querySelectorAll(".navList li");
let genHeight = parseInt(getComputedStyle(document.querySelector(".wrapper")).height);

//data for mapping with navBalls - valid with only 3 sections!
//purpose: shift active navBall depending on currentOffset value
let stepValues = [
    [currentOffset, navBalls[0]],
    [currentOffset - step * 1, navBalls[1]],
    [currentOffset - step * 2, navBalls[2]]
]

let step_navs_map = new Map(stepValues);

//handling spinner loading effect
window.addEventListener("load", () => {
    console.log("ok")
    document.querySelector(".spinner").style.opacity = 0;
    setTimeout(()=>{
        document.querySelector(".spinner").style.display = "none";
    }, 1100)
})



//navBalls styling function
const mapNavball = function () {
    let keyOffset = step_navs_map.get(currentOffset);

    if (keyOffset){
        step_navs_map.forEach((key) => {
            if (key.classList.contains("activeNavBall")) {
                key.classList.toggle("activeNavBall")
            }
        })
        keyOffset.classList.toggle("activeNavBall")
    }
}

//moving all main blocks simultaneously along Y-axis
//leap is needed for adjsutment of YAxis traverse depth
const move = function (dir, leap = 1) {
        if (dir === "down") {
            if (-currentOffset + step * leap < genHeight) {
                currentOffset -= step * leap;
            }
        } else if (-currentOffset - step >= 0) {
            currentOffset += step;
        }
        document.querySelectorAll(".panel").forEach((a) => {
            a.style.transform = `translateY(${currentOffset}px)`
        });

        mapNavball(); // navBalls styling function watches for changes during navigation

        //let anchor = window.location.href.match(/[$#](\w+)/)[0];
        //location.assign(window.location.href.slice(0, -anchor.length))
}

//setTimout setting function for DRY purpose
const directMove = function (dir) {
    return setTimeout(() => {
        move(dir);
        document.body.style.overflow = "visible"
    }, 500)
}

//navigation through navBalls handler
document.querySelector(".navList").addEventListener("click", (e) => {
    if (e.target.nodeName === "LI") {

        step_navs_map.forEach((key, value) => {
            if(key === e.target) {

                document.querySelectorAll(".panel").forEach((a) => {
                    a.style.transform = `translateY(${value}px)`
                });

                currentOffset = value;
            }
        })
        mapNavball();
    }
})

// //arrows Up and Down handler
// window.addEventListener("keydown", (e) => {
//     e.preventDefault();

//     if (document.body.style.overflow === "visible") {

//         document.body.style.overflow = "hidden";

//         if (e.keyCode === 40) {
//             directMove("down")
//         } else if (e.keyCode === 38) {
//             directMove("up")
//         }
//     }

// })

// //mouse wheel handler
// window.addEventListener("mousewheel", (e) => {
//     e.preventDefault();

//     //enable scroll handling after on single roll - then cooldown
//     if (document.body.style.overflow === "visible") {

//     document.body.style.overflow = "hidden";

//         if(e.deltaY >= 0) {
//             directMove("down")
//         } else {
//             directMove("up")
//         }
//     }

// })
