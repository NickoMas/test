let currentOffset = 0;
let panel = document.querySelector(".panel");
let step = parseInt(getComputedStyle(panel).minHeight);
let genHeight = parseInt(getComputedStyle(document.querySelector(".wrapper")).height);

// const scrollToPlace = (dir) => {
//     const go = setInterval(() => {
// 	    document.body.scrollTop += 5;
//     }, 10)
// }

const func = function (dir) {
    document.body.style.overflow = "hidden";

    if (dir === "down") {
        const fo = setInterval(() => {
            document.body.scrollTop += 1;
            if (document.body.scrollTop >= (currentOffset + step)) {
                clearInterval(fo);console.log("fire!");
                currentOffset = document.body.scrollTop;
                // document.body.style.overflow = "visible";
            }
        }, 5)
    } else if (document.body.scrollTop) {
        const fo = setInterval(() => {
            document.body.scrollTop -= 1;
            if (document.body.scrollTop <= (currentOffset - step)) {
                clearInterval(fo);
                currentOffset = document.body.scrollTop;
                // document.body.style.overflow = "visible";
            }
        }, 5)
    }
}

//// setIntervals through promises >

//
// const com = function () {
//
//     document.body.style.overflow = "hidden";
//
//     let promise = new Promise(function(resolve, reject) {
//
//         const go = setInterval(() => {
//
//
//             if(document.body.scrollTop === (currentOffset + step)) {
//                 alert('ookpok')
//                 clearInterval(go);
//                 setTimeout(()=>{
//                     document.body.style.overflow = "visible";
//                 },1000)
//                 currentOffset = document.body.scrollTop;
//                 resolve();
//             }
//         }, 10)
//
//     });
//
//     return promise
// }

//moving all main blocks simultaneously along Y-axis


//currentOffset = 0

const move = function (dir, leap) {
        if (dir === "down") {
            if (-currentOffset + (leap || step) < genHeight){
                currentOffset -= (leap || step);
            }
        } else if (-currentOffset - step >= 0) {
            currentOffset += step;
        }
        document.querySelectorAll(".panel").forEach((a) => {
            a.style.transform = `translateY(${currentOffset}px)`
        });
        //let anchor = window.location.href.match(/[$#](\w+)/)[0];
        //location.assign(window.location.href.slice(0, -anchor.length))
}

window.addEventListener("mousewheel", (e) => {
    e.preventDefault();

    if(e.deltaY >= 0) {
        setTimeout(() => {
            move("down")
        }, 200)
    } else {
        setTimeout(() => {
            move("up")
        }, 200)
    }
})

// window.addEventListener("scroll", (e) => {
//     if(window.pageYOffset > currentOffset) {
//         move("down")
//         console.log("down")
//     } else if (window.pageYOffset < currentOffset) {
//         move("up")
//         console.log("up")
//     }
// })
