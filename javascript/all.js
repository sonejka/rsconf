
var el = document.getElementById("nav");
var navBtn = document.getElementById("nav-btn");

function toggleClass() {
    if (el.className == "vertical-mode-closed") {
    el.className = "vertical-mode";
    navBtn.innerHTML = 'x';
    } else {
    el.className = "vertical-mode-closed";
    navBtn.innerHTML = '&#x2261;';
    }
    }

window.onresize = resize;
function resize() {
    el.className = "vertical-mode-closed";
    navBtn.innerHTML = '&#x2261;';
    }
