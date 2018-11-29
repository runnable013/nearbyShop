
var logo, search;

window.onload = function() {
    logo = document.getElementById("logo");
    search = document.getElementById("search");
}

function onSearch() {
    $("html, body").animate({scrollTop : $('.result').offset().top-100}, 600);
}