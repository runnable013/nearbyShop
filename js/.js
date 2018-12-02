
var logo, search;
var didScroll;
var navbarHeight; //sub-top fixed가 나오는 위치
var resultTop;
var nowHeight;

$(document).ready(function() {
    logo = document.getElementById("logo");
    search = document.getElementById("search");
    resultTop = $('.result').offset().top;
    navbarHeight = $('.result').outerHeight() - 50; 
});

function onSearch() {
    if(nowHeight < resultTop-95 || nowHeight > resultTop+50)
        $("html, body").animate({ scrollTop: resultTop - 90 }, 600);
}

// 스크롤을 할때마다 체크
$(window).scroll(function(event){
    didScroll = true;
});

// 스크롤 했을때 hasScrolled()을 실행함
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
    
// 동작을 구현
function hasScrolled() {
    // 현재 스크롤 위치
    nowHeight = $(this).scrollTop();
    
    if (nowHeight > navbarHeight){
        // 스크롤 Down
        $('.sub-top').attr('style', 'visibility:visible;');
        $('.top').attr('style', 'background-color:rgba(0, 0, 0, 0.5)');
        $('.top-login-btn').attr('style', 'text-shadow: 0 0 3px rgba(222, 222, 222, 0)');

    } else {
        // 스크롤 Up
        $('.sub-top').attr('style', 'visibility:hidden');
        $('.top').attr('style', 'background-color:rgba(0, 0, 0, 0)');
        $('.top-login-btn').attr('style', 'text-shadow: 0 0 3px rgba(222, 222, 222, 1)');
    }
}
