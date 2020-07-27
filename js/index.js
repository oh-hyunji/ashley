$(document).ready(function(){
    

    var docWidth = $('html,body').width();
    $('#imgBox img').width(docWidth);
    $('#shadow img').width(docWidth);

    $( window ).resize( function() {
        var docWidth = $('html,body').width();
        $('#imgBox img').width(docWidth);
        $('#shadow img').width(docWidth);
    });
    

    var cnt = 0;
    var title = ['Avocado', 'Black Label', 'Soft Cream'];
    var title1 = ['Green Salad', 'Chef Edition', 'White Pasta'];
    var line = ['210px', '205px', '200px'];
    var cont =[
        '신선한 숲속의 버터 아보카도와 향긋하고 달콤한 과일 그리고 새콤한 라코타 치즈가 <br>만나 행복함을 드립니다. 지금 상세메뉴 버튼을 클릭해 보러 오세요.',
        '깊고 풍부한 풍미의 프로볼로네 치즈와 두툼하고 육즙이 가득한 블랙라벨 스테이크가 <br>만나 행복함을 드립니다. 지금 상세메뉴 버튼을 클릭해 보러 오세요.',
        '부드럽고 담백한 화이트 크림 소스와 베이컨 파마산 치즈, 상큼한 바질 페스토가<br>만나 행복함을 드립니다. 지금 상세메뉴 버튼을 클릭해 보러 오세요.'
    ];
    $.slide = function(val){
        $('#imgBox').animate({'margin-left': docWidth * -1}, 800 ,function(){
            $('#imgBox img:first').appendTo('#imgBox');
            $('#imgBox').css('margin-left','0');
        });

        cnt++;
        if(cnt > 2) cnt = 0; 

        $('#pageNum li').removeClass();
        $('#pageNum li').eq(cnt).addClass('numOn');

        $('#pageNum li').children('div').removeClass();
        $('#pageNum li').eq(cnt).children('div').addClass('lineOn');

        $('.changeTitle').html(title[cnt]);
        $('.changeTitle2').html(title1[cnt]);
        $('.changeCont').html(cont[cnt]);
        $('.titleLine').css('width', line[cnt]);

        $(".changeTitle").letterfx({"fx":"fly-right","backwards":false,"timing":100,"fx_duration":"1200ms","letter_end":"stay","element_end":"stay"});
        $(".changeTitle2").letterfx({"fx":"wave","fx_duration":"500ms","letter_end":"rewind","element_end":"stay"});
    }
    setInterval(function(){ $.slide(); },4000);
    

    var cnt2 = 0;
    var title2 = ['Ashley Red', 'Basil Pesto', 'Pork Steak'];
    var cont2 =[
        '애슐리에서 출시한 미디엄 바디 레드 와인으로 과일 풍미가 가득해<br>다양한 음식과 함께 잘 어우러집니다. 지금 애슐리에 오셔서 즐겨보세요.',
        '화이트 크림과 바질 페스토 브리 치즈가 만나 풍부한 맛이 가득한 크림 파스타로<br>애슐리에서 인기 만점 파스타 입니다. 꼭 오셔서 드셔보세요.',
        '에슐리 만의 특제 소스와 돼지 목살이 더해진 부드러운 포크 스테이크<br>애슐리 스테이크 메뉴 중 가장 추천드리는 스테이크 입니다. 지금 즐겨보세요.'
    ];
    $.slide2 = function(){
        localStorage.setItem('slideEvt', 'on');
        
        if(cnt2 > 2) cnt2 = 0; 

        $('#bSlide img').fadeOut('slow');
        $('#bSlide img').eq(cnt2).fadeIn('slow');

        $('.circle').removeClass('cOn');
        $('.circle').eq(cnt2).addClass('cOn');

        $('.bMenu').html(title2[cnt2]);
        $('.bText').html(cont2[cnt2]);
        $(".bMenu").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});

        cnt2++;

        var timeLoop = setTimeout(function(){$.slide2()}, 3000);
    }

    var cnt3 = 0;
    $.slide3 = function(val){
        $('.conceptInfo p:first-child').removeClass('on1');
        $('.conceptInfo h3').removeClass('on2');
        $('.conceptInfo p:last-child').removeClass('on3');
        $(".numberAbox img").removeClass('on4');
        $(".slideL").removeClass('slOn');

        $(".numberAbox").eq(1).find('.conceptInfo p:first-child').addClass('on1');
        $(".numberAbox").eq(1).find('.conceptInfo h3').addClass('on2');
        $(".numberAbox").eq(1).find('.conceptInfo p:last-child').addClass('on3');
        $(".numberAbox").eq(1).find('img').addClass('on4');

        $('.aBox').animate({'margin-left': '-340px'}, 800 ,function(){
            $('.numberAbox:first').appendTo('.aBox');
            $('.aBox').css('margin-left','0');
        });
        
        cnt3++;
        if(cnt3 > 3) cnt3 = 0;
        $(".slideL").eq(cnt3).addClass('slOn');

        var timeLoop = setTimeout(function(){$.slide3()}, 4000);
    }
    
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

    $.textAni = function(){
        localStorage.setItem('textAni', 'on');
        $(".cTitle").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        setTimeout(function(){
            $(".cTitle2").letterfx({"fx":"fly-top","backwards":false,"timing":100,"fx_duration":"1200ms","letter_end":"stay","element_end":"stay"});
        }, 1000);
    }

    $.textAni1 = function(){
        $('.aInfo').animate({'margin-right':0}, 1000);
        setTimeout(function(){$.slide3();},4000);

        localStorage.setItem('textAni1', 'on');
        $('.aTopBo').animate({opacity:1}, 1000);
        setTimeout(function(){$('.aTopTo').animate({opacity:1}, 1000);}, 1000);
        setTimeout(function(){$('.aInfo p').animate({opacity:1}, 1000);}, 2000);

        $(".aTopBo").letterfx({"fx":"fly-right","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        setTimeout(function(){$(".aTopTo").letterfx({"fx":"fly-top","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});}, 1000);
    }

    $.textAni2 = function(){
        localStorage.setItem('textAni2', 'on');
        $(".eTitle").letterfx({"fx":"grow smear","backwards":false,"timing":50,"fx_duration":"1000ms","letter_end":"restore","element_end":"stay"});
        $.homesOpen();
    }

    $.textAni3 = function(){
        localStorage.setItem('textAni3', 'on');
        $(".gTitle").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        setTimeout(function(){
            $(".gTitle2").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        }, 1000);
        $.homesClose();
    }

    $.textAni4 = function(media){
        localStorage.setItem('textAni4', 'on');
        $(".brandTitle").letterfx({"fx":"grow smear","backwards":false,"timing":50,"fx_duration":"800ms","letter_end":"restore","element_end":"stay"});
        
        var mediaClass = (media == "m") ? '.hMtextInfo' : '.hTextInfo';
        setTimeout(function(){ $(mediaClass).animate({opacity:1}); }, 1200);
    }

    $.textAni5 = function(){
        localStorage.setItem('textAni5', 'on');
        $(".iTitle").letterfx({"fx":"fly-bottom","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        //$(".iTitle").letterfx({"fx":"grow smear","backwards":false,"timing":50,"fx_duration":"1000ms","letter_end":"restore","element_end":"stay"});
    }

    var aSec = $('#aSec').offset().top; 
    var bSec = $('#bSec').offset().top; 
    var cSec = $('#cSec').offset().top; 
    var dSec = $('#dSec').offset().top; 
    var eSec = $('#eSec').offset().top; 
    var fSec = $('#fSec').offset().top; 
    var gSec = $('#gSec').offset().top; 
    var hSec = $('#hSec').offset().top; 
    var iSec = $('#iSec').offset().top; 
    var minusNum = 500;
    var minusNumMidea = 300;

    // window scroll event
    $(window).scroll(function(){
        var scrollT = $(this).scrollTop();

        // if(scrollT == 0) {
        //     $('#topBox').removeClass();
        //     $('.menu:last-child a').css('color', '#212529');
        // } else {
        //     $('#topBox').addClass('menuScroll');
        //     $('.menu:last-child a').css('color', '#fff');
        // }

        // 모바일 화면 (480) 보다 클때 
        if(docWidth > 480){
            if(scrollT >= 100) { 
                $('#topBt').fadeIn('slow');
                $('#topBt').css('display','flex');
            } else {
                $('#topBt').fadeOut('slow');
            }

            // section A scroll evt
            if(scrollT >= aSec - minusNum) {
                var textAni1 = localStorage.getItem('textAni1');
                if(textAni1 != 'on') $.textAni1();
            }

            // section B scroll evt
            if(scrollT >= aSec) {
                $('#bTitle').animate({opacity:1}, 1000);

                var slideEvt = localStorage.getItem('slideEvt');
                if(slideEvt != 'on') $.slide2();
            }
    
            // section C scroll evt
            if(scrollT >= bSec) {
                $('#cImgBox img').addClass('imgScale');
                $('.cTitle').animate({opacity:1}, 1000);
                setTimeout(function(){
                    $('.cTitle2').animate({opacity:1}, 1000);
                }, 1000);
                $('.cText').stop().fadeIn(1000);
               
                var textAni = localStorage.getItem('textAni');
               if(textAni != 'on') $.textAni();
            }
    
            // section E scroll evt
            if(scrollT >= eSec - minusNum) {
                $('.eText').stop().fadeIn(1000);
                
                var textAni2 = localStorage.getItem('textAni2');
                if(textAni2 != 'on') $.textAni2();
            }
    
            // section G scroll evt
            if(scrollT >= eSec) {
                $('#gImgBox img').addClass('imgRotate');
                $('.gTitle').animate({opacity:1});
                setTimeout(function(){
                    $('.gTitle2').animate({opacity:1});
                }, 1000);
                $('.gText').stop().fadeIn(1000);
               
                var textAni3 = localStorage.getItem('textAni3');
                if(textAni3 != 'on') $.textAni3();
            }
    
            // section D scroll evt
            if(scrollT >= dSec - minusNum) {
                $("#dTitle").stop().fadeIn(800);
            }
    
            // section F scroll evt
            if(scrollT >= fSec - minusNum) {
                $(".fIcon").stop().fadeIn(800);
            }
    
            // section h scroll evt
            if(scrollT >= hSec - minusNum) {
                $('.brandInfo p:first-child, .brandText').animate({opacity:1});
                $('.brandTitle').animate({opacity:1});
                var textAni4 = localStorage.getItem('textAni4');
                if(textAni4 != 'on') $.textAni4();
            }
    
            // section i scroll evt
            if(scrollT >= iSec - minusNum) {
                $('#iImgBox').animate({'margin-left':'0px'}, 1000, function(){
                    $('.iText').animate({opacity:1});
                    $('.iTitle').animate({opacity:1});
                    var textAni5 = localStorage.getItem('textAni5');
                    if(textAni5 != 'on') $.textAni5();
                });
            }
        }






        //var info = $('.info').offset().top + 500; 

        // 모바일 화면 (480) 보다 작을때 
        if(docWidth <= 480){
            if(scrollT >= 100) { 
                $('#topBt').fadeIn('slow');
                $('#sideBt').fadeIn('slow');
                $('#topBt').css('display','flex');
                $('#sideBt').css('display','flex');
            } else {
                $('#topBt').fadeOut('slow');
                $('#sideBt').fadeOut('slow');
            }
    
            // section A scroll evt
            if(scrollT >= aSec - minusNumMidea) {
                $('.aCont').animate({opacity:1}, 1000);
            }
    
            // section B scroll evt
            if(scrollT >= bSec - minusNumMidea) {
                $('#bTitle').animate({opacity:1}, 1000);

                var slideEvt = localStorage.getItem('slideEvt');
                if(slideEvt != 'on') $.slide2();
            }
    
            // section C scroll evt
            if(scrollT >= cSec - minusNumMidea) {
                $('#cImgBox img').addClass('imgScale');
                $('.cTitle').animate({opacity:1}, 1000);
                setTimeout(function(){
                    $('.cTitle2').animate({opacity:1}, 1000);
                }, 1000);
                $('.cText').stop().fadeIn(1000);
               
                var textAni = localStorage.getItem('textAni');
               if(textAni != 'on') $.textAni();
            }
    
            // section E scroll evt
            if(scrollT >= eSec - minusNumMidea) {
                $('.eText').stop().fadeIn(1000);
                
                var textAni2 = localStorage.getItem('textAni2');
                if(textAni2 != 'on') $.textAni2();
            }
    
            // section G scroll evt
            if(scrollT >= gSec - minusNumMidea) {
                $('#gImgBox img').addClass('imgRotate');
                $('.gTitle').animate({opacity:1});
                setTimeout(function(){
                    $('.gTitle2').animate({opacity:1});
                }, 1000);
                $('.gText').stop().fadeIn(1000);
               
                var textAni3 = localStorage.getItem('textAni3');
                if(textAni3 != 'on') $.textAni3();
            }
    
            // section D scroll evt
            if(scrollT >= dSec - minusNumMidea) {
                $("#dTitle").stop().fadeIn(800);
            }
    
            // section F scroll evt
            if(scrollT >= fSec - minusNumMidea) {
                $(".fIcon").stop().fadeIn(800);
            }
    
            // section h scroll evt
            if(scrollT >= hSec - minusNumMidea) {
                $('.brandInfo p:first-child, .brandText').animate({opacity:1});
                $('.brandTitle').animate({opacity:1});
                var textAni4 = localStorage.getItem('textAni4');
                if(textAni4 != 'on') $.textAni4('m');
            }
    
            // section i scroll evt
            if(scrollT >= iSec - minusNumMidea) {
                $('#iImgBox').animate({'margin-left':'0px'}, 1000, function(){
                    $('.iText').animate({opacity:1});
                    $('.iTitle').animate({opacity:1});
                    var textAni5 = localStorage.getItem('textAni5');
                    if(textAni5 != 'on') $.textAni5();
                });
            }
        }

    });

    

});

window.onload = function () {
    localStorage.clear(); 
    $(".changeTitle").letterfx({"fx":"fly-right","backwards":false,"timing":100,"fx_duration":"1200ms","letter_end":"stay","element_end":"stay"});
    $(".changeTitle2").letterfx({"fx":"wave","fx_duration":"500ms","letter_end":"rewind","element_end":"stay"});
    // 모바일 화면 (480) 보다 작을때 
    var docWidth2 = $('html,body').width();
    if(docWidth2 <= 480){
        $("#mediaTitle p:first-child").animate({opacity:1});
        $("#mediaTitle p:first-child").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        setTimeout(function(){
            $("#mediaTitle p:nth-child(2)").animate({opacity:1});
            $("#mediaTitle p:nth-child(2)").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
            setTimeout(function(){
                $("#mediaTitle p:nth-child(3)").animate({opacity:1});
                $("#mediaTitle p:nth-child(3)").letterfx({"fx":"fly-top","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
            },1000);
        },1000);

    }
}