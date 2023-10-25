window.onscroll = function() {navScrolling()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
function navScrolling() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}