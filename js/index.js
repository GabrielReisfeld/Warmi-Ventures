
// const rellax = new Rellax('.rellax');

//******************* SCROLL DOWN ANIMATIONS *******************//

// When the user scrolls down 20px from the top of the document, slide down the navbar
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//     //------Functionality to change navbar color at certain distance from top----//
//
//     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//         document.getElementById("navbar").style.backgroundColor = "#7651ee";
//     } else {
//         document.getElementById("navbar").style.backgroundColor = "black";
//     }    
// }

const el = document.querySelector("#parallax-bkg");

window.addEventListener("scroll", (e) => {
    // el.style.backgroundPositionX = -e.offsetX + "px";
    el.style.backgroundPositionY = -window.pageYOffset + "px";
});