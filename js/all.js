$(document).ready(function(){
    $('#sideBt').on('click', function(){
        if($('#sideBt').css('right') == "-100px") {
            $.homesOpen();
        } else {
            $.homesClose();
        }
    });

    $.homesOpen = function(){
        $('#sideBt').animate({'right': '0'}, 800);
        $('.openBt').html('CLOSE');

        $('#topBt').animate({opacity:0}, 1000);
    }
    $.homesClose = function(){
        $('#sideBt').animate({'right': '-100px'}, 800);
        $('.openBt').html('OPEN');
        
        $('#topBt').animate({opacity:1}, 1000);
    }

    $('#sideBox').on('click', function(e){
        e.preventDefault();
        window.open('https://www.homestaurant.co.kr/');
    });

    // scroll top button
    $('#topBt').on('click', function(){
        $('html, body').animate({scrollTop : 0}, 600);
        return false;
    });

    $('#mSideBt').on('click', function(){
        $('#mobileNavi').css('display','flex');
        // $('html,body').css('overflow-y', 'hidden');
    });

    $('.moClose').on('click', function(){
        $('#mobileNavi').css('display','none');
        // $('html,body').css('overflow-y', 'auto');
    });

    $('.lClose').on('click', function(){
        $('#popLogin').css('display','none');
        // $('html,body').css('overflow-y', 'auto');
    });

    $('#login').on('click', function(){
        $('#popLogin').css('display','flex');
        // $('html,body').css('overflow-y', 'hidden');
    });
});