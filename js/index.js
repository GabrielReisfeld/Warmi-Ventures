const el = document.querySelector("#parallax-bkg");
var x = window.matchMedia("(max-width: 700px)")

window.addEventListener("scroll", (e) => {
    if (!x.matches) {
        el.style.backgroundPositionY = -window.pageYOffset + "px";
    }
});