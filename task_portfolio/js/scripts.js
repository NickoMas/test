let currentOffset = 0;
let panel = document.querySelector(".panel");
let step = parseInt(getComputedStyle(panel).minHeight);

// const scrollToPlace = (dir) => {
//     const go = setInterval(() => {
// 	    document.body.scrollTop += 5;
//     }, 10)
// }

// let promise = new Promise(function(resolve, reject) {
//
//     const go = setInterval(() => {
// 	    document.body.scrollTop += 5;
//     }, 10)
//
//     if(document.body.scrollTop === 200) {
//         clearInterval(go);
//         resolve();
//     }
// });

const func = function (dir) {
    document.body.style.overflow = "hidden";

    if (dir === "down") {
        const fo = setInterval(() => {
            document.body.scrollTop += 1;
            if (document.body.scrollTop === (currentOffset + step)) {
                clearInterval(fo);
                document.body.style.overflow = "visible";
            }
        }, 10)
    } else {
        const fo = setInterval(() => {
            document.body.scrollTop -= 1;
            if (document.body.scrollTop === (currentOffset - step)) {
                clearInterval(fo);
                document.body.style.overflow = "visible";
            }
        }, 10)
    }

    // const fo = setInterval(() => {
    //     if (dir === "down") {
    //         document.body.scrollTop += 1;
    //         if (document.body.scrollTop === (currentOffset + step)) {
    //             clearInterval(fo);
    //             document.body.style.overflow = "visible";
    //         }
    //     } else {
    //         document.body.scrollTop -= 1;
    //         if (document.body.scrollTop === (currentOffset - step)) {
    //             clearInterval(fo)
    //             document.body.style.overflow = "visible";
    //         }
    //     }
    //
    //     currentOffset = document.body.scrollTop;
    // }, 10)
    //clearInterval(fo)
}

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


// window.addEventListener("scroll", () => {
//     window.pageYOffset > currentOffset ? func("down") : func("up")
// })
