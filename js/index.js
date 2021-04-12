
const rellax = new Rellax('.rellax');

//******************* SCROLL DOWN ANIMATIONS *******************//

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollParallax()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
        
        //------Functionality to change navbar color at certain distance from top----//
        
        // if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        //     document.getElementById("navbar").style.backgroundColor = "#7651ee";
        // } else {
        //     document.getElementById("navbar").style.backgroundColor = "transparent";
        // }
        
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
}