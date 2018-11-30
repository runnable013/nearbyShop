
var logo, search;
var didScroll;
var navbarHeight; //영향을 받을 요소를 선택

$(document).ready(function() {
    logo = document.getElementById("logo");
    search = document.getElementById("search");
    navbarHeight = $('.result').outerHeight() - 50; 
});

function onSearch() {
    $("html, body").animate({ scrollTop: $('.result').offset().top - 100 }, 600);
}

// 스크롤시에 사용자가 스크롤했다는 것을 알림
$(window).scroll(function(event){
    didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
    
// 동작을 구현
function hasScrolled() {
    // 현재 스크롤 위치
    var st = $(this).scrollTop();
    
    if (st > navbarHeight){
        // Scroll Down
        $('.sub-top').attr('style', 'visibility:visible;');
        $('.top').attr('style', 'background-color:rgba(0, 0, 0, 0.5)');
        $('.top-login-btn').attr('style', 'text-shadow: 0 0 3px rgba(222, 222, 222, 0)');

    } else {
        // Scroll Up
        $('.sub-top').attr('style', 'visibility:hidden');
        $('.top').attr('style', 'background-color:rgba(0, 0, 0, 0)');
        $('.top-login-btn').attr('style', 'text-shadow: 0 0 3px rgba(222, 222, 222, 1)');
    }
}
