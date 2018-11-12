
var logo, search;

window.onload = function() {
    logo = document.getElementById("logo");
    search = document.getElementById("search");
}

function disSearch() {
    setTimeout(function() {
        logo.style.display = "none";
        search.style.display = "flex";
    }, 700);
}

function onSearch() {

}
