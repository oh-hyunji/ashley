$(document).ready(function(){
    var aniEvt = [];
    var docWidth = $('html,body').width();
    $('#imgBox img').width(docWidth);
    $('#shadow img').width(docWidth);

    $( window ).resize( function() {
        var docWidth = $('html,body').width();
        $('#imgBox img').width(docWidth);
        $('#shadow img').width(docWidth);
    });

    var menuLineWidth = {
        'brand' : '42px',
        'menu' : '42px',
        'benefit' : '52px',
        'store' : '38px',
        'customer' : '68px'
    }
    $('.menu').mouseenter(function(){
        $('.menu div').css('width', 0);

        var id = $(this).attr('id');
        var select = '#' + $(this).attr('id') + ' div';
        $(select).css('width', menuLineWidth[id]);
    });

    $('.menu').mouseleave(function(){
        $('.menu div').css('width', 0);
    });

    var cnt = 0;
    var title = ['Black Label', 'Red Tomato', 'Soft Cream'];
    var title1 = ['Chef Edition', 'Cheese Pizza', 'Shrimp Pasta'];
    var line = ['210px', '205px', '200px'];
    var cont =[
        '깊고 풍부한 풍미의 프로볼로네 치즈와 두툼하고 육즙이 가득한 블랙라벨 스테이크가 <br>만나 행복함을 드립니다. 지금 상세메뉴 버튼을 클릭해 보러 오세요.',
        '빨갛고 싱싱한 자연산 토마토와 새콤한 라코타 치즈, 바질, 시금치, 버섯 등 야채들이 <br>만나 행복함을 드립니다. 지금 상세메뉴 버튼을 클릭해 보러 오세요.',
        '부드럽고 담백한 화이트 크림 소스와 베이컨 파마산 치즈, 신선하고 살이 꽉찬 꽃 새우가<br>만나 행복함을 드립니다. 지금 상세메뉴 버튼을 클릭해 보러 오세요.'
    ];

    var timeLoopHeader;
    $.slide = function(page, val){
        if(page) cnt = (val - 1);
        else cnt = (cnt > 2) ?  0 : cnt; 

        var slideNum = (page) ? (val - 1) * -1 : (cnt * -1);
        var margin = docWidth * slideNum;
        $('#imgBox').stop().animate({'margin-left': margin}, 1000 ,function(){});

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
  
        cnt++;
        timeLoopHeader = setTimeout(function(){$.slide();}, 5000);
    }
    $.slide();
    
    $('#pageNum li').on('click', function(){
        var index = $(this).index() + 1;
        var className = '.headImg' + index;
        var imgIndex = $(className).index() + 1;
        
        clearTimeout(timeLoopHeader);
        $.slide('pageClick', imgIndex);
    });

    var cnt2 = 0;
    var title2 = ['Ashley Red', 'Basil Pesto', 'Pork Steak'];
    var cont2 =[
        '애슐리에서 출시한 미디엄 바디 레드 와인으로 과일 풍미가 가득해<br>다양한 음식과 함께 잘 어우러집니다. 지금 애슐리에 오셔서 즐겨보세요.',
        '화이트 크림과 바질 페스토 브리 치즈가 만나 풍부한 맛이 가득한 크림 파스타로<br>애슐리에서 인기 만점 파스타 입니다. 꼭 오셔서 드셔보세요.',
        '에슐리 만의 특제 소스와 돼지 목살이 더해진 부드러운 포크 스테이크<br>애슐리 스테이크 메뉴 중 가장 추천드리는 스테이크 입니다. 지금 즐겨보세요.'
    ];

    var timeLoop1; 
    $.slide2 = function(page, val){
        if(aniEvt.indexOf('slideEvt') < 0) aniEvt.push('slideEvt');

        if(page) cnt2 = (val - 1);
        else cnt2 = (cnt2 > 2) ?  0 : cnt2; 

        $('#bSlide img').fadeOut('slow');
        $('#bSlide img').eq(cnt2).fadeIn('slow');

        $('.circle').removeClass('cOn');
        $('.circle').eq(cnt2).addClass('cOn');

        $('.bMenu').html(title2[cnt2]);
        $('.bText').html(cont2[cnt2]);
        $(".bMenu").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});

        cnt2++;
        timeLoop1 = setTimeout(function(){$.slide2()}, 3000);
    }

    $('.circle').on('click', function(){
        var index = $(this).index() + 1;
        var className = '.bImg' + index;
        var imgIndex = $(className).index() + 1;

        clearTimeout(timeLoop1);
        $.slide2('circle', imgIndex);
    });

    var cnt3 = 0;
    $.slide3 = function(){
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

    $('.slideL, .numberAbox').on('click', function(){
        var type = $(this).data('concept');
        if(type == 'classic') location.href = 'menu.html?concept='+type;
        else alert('Classic외 컨셉은 준비중입니다.');
    });
    
    $.textAni = function(){
        aniEvt.push('textAni');

        $(".cTitle").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        setTimeout(function(){
            $(".cTitle2").letterfx({"fx":"fly-top","backwards":false,"timing":100,"fx_duration":"1200ms","letter_end":"stay","element_end":"stay"});
        }, 1000);
    }

    $.textAni1 = function(){
        $('.aInfo').animate({'margin-right':0}, 1000);
        setTimeout(function(){$.slide3();},4000);

        aniEvt.push('textAni1');

        $('.aTopBo').animate({opacity:1}, 1000);
        setTimeout(function(){$('.aTopTo').animate({opacity:1}, 1000);}, 1000);
        setTimeout(function(){$('.aInfo p').animate({opacity:1}, 1000);}, 2000);

        $(".aTopBo").letterfx({"fx":"fly-right","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        setTimeout(function(){$(".aTopTo").letterfx({"fx":"fly-top","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});}, 1000);
    }

    $.textAni2 = function(){
        aniEvt.push('textAni2');

        $(".eTitle").letterfx({"fx":"grow smear","backwards":false,"timing":50,"fx_duration":"1000ms","letter_end":"restore","element_end":"stay"});
        $.homesOpen();
    }

    $.textAni3 = function(){
        aniEvt.push('textAni3');

        $(".gTitle").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        setTimeout(function(){
            $(".gTitle2").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        }, 1000);
        $.homesClose();
    }

    $.textAni4 = function(media){
        aniEvt.push('textAni4');

        $(".brandTitle").letterfx({"fx":"grow smear","backwards":false,"timing":50,"fx_duration":"800ms","letter_end":"restore","element_end":"stay"});
        
        var mediaClass = (media == "m") ? '.hMtextInfo' : '.hTextInfo';
        setTimeout(function(){ $(mediaClass).animate({opacity:1}); }, 1200);
    }

    $.textAni5 = function(){
        aniEvt.push('textAni5');

        $(".iTitle").letterfx({"fx":"fly-bottom","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
    }

    var aSec = $('#aSec').position().top; 
    var bSec = $('#bSec').position().top; 
    var cSec = $('#cSec').position().top; 
    var dSec = $('#dSec').position().top; 
    var eSec = $('#eSec').position().top; 
    var fSec = $('#fSec').position().top; 
    var gSec = $('#gSec').position().top; 
    var hSec = $('#hSec').position().top; 
    var iSec = $('#iSec').position().top; 

    var minusNum = 300;
    var minusNum2 = 200;
   
    var aniTime = 1000;
    var aniTime8 = 800;

    // window scroll event
    $(window).scroll(function(){
        var scrollT = $(window).scrollTop();

        if(scrollT >= 100) { 
            $('#topBt').fadeIn('slow');
            $('#topBt').css('display','flex');

            if(docWidth <= 480) {
                $('#sideBt').fadeIn('slow');
                $('#sideBt').css('display','flex');
            }
        } else {
            $('#topBt').fadeOut('slow');
            if(docWidth <= 480) $('#sideBt').fadeOut('slow');
        }

        // section A scroll evt - concept
        if(scrollT >= aSec - minusNum) {
            if(docWidth > 480) {
                var textAni1 = (aniEvt.indexOf('textAni1') >= 0) ? 'on' : '';
                if(textAni1 != 'on') $.textAni1();
            } else {
                $('.aCont').animate({opacity:1}, 1000);
            }
        }

        // section B scroll evt - magagin
        if(scrollT >= bSec - minusNum) {
            $('#bTitle').animate({opacity:1}, 1000);

            var slideEvt = (aniEvt.indexOf('slideEvt') >= 0) ? 'on' : '';
            if(slideEvt != 'on') $.slide2();
        }

        // section C scroll evt - art food
        if(scrollT >= cSec - minusNum) {
            $('#cImgBox img').addClass('imgScale');

            var textAni = (aniEvt.indexOf('textAni') >= 0) ? 'on' : '';
            if(textAni != 'on') $.textAni();

            $('.cTitle').animate({opacity:1}, aniTime, function(){
                $('.cTitle2').animate({opacity:1}, aniTime, function(){
                    if(docWidth > 480) $('.cText').animate({opacity:1}, aniTime);
                    else $('.cMediaText').animate({opacity:1}, aniTime);
                });
            });
        }

        // section E scroll evt - home staurant
        if(scrollT >= eSec - minusNum) {
            $('.eText').stop().fadeIn(1000);
            
            var textAni2 = (aniEvt.indexOf('textAni2') >= 0) ? 'on' : '';
            if(textAni2 != 'on') $.textAni2();
        }

        // section G scroll evt - special wine
        if(scrollT >= gSec - minusNum) {
            $('#gImgBox img').addClass('imgRotate');
            
            var textAni3 = (aniEvt.indexOf('textAni3') >= 0) ? 'on' : '';
            if(textAni3 != 'on') $.textAni3();

            $('.gTitle').animate({opacity:1}, aniTime, function(){
                $('.gTitle2').animate({opacity:1}, aniTime, function(){
                    if(docWidth > 480) $('.gText').animate({opacity:1}, aniTime);
                    else $('.gMediaText').animate({opacity:1}, aniTime);
                });
            });
        }

        // section D scroll evt - grill & salad movie
        if(scrollT >= dSec - minusNum2) {
            $("#dTitle").animate({opacity:1}, aniTime);
        }

        // section F scroll evt - evt & notice
        if(scrollT >= fSec - minusNum2) {
            $(".fIcon").animate({opacity:1}, aniTime);
        }

        // section h scroll evt - brand story
        if(scrollT >= hSec - minusNum2) {
            $('.brandInfo p:first-child, .brandText').animate({opacity:1});
            $('.brandTitle').animate({opacity:1});

            var textAni4 = (aniEvt.indexOf('textAni4') >= 0) ? 'on' : '';
            var media = (docWidth > 480) ? '' : 'm';
            if(textAni4 != 'on') $.textAni4(media);
        }

        // section i scroll evt - search map
        if(scrollT >= iSec - minusNum) {
            $('#iImgBox').animate({'margin-left':'0px'}, aniTime, function(){
                $('.iText').animate({opacity:1}, aniTime8, function(){
                    var textAni5 = (aniEvt.indexOf('textAni5') >= 0) ? 'on' : '';
                    if(textAni5 != 'on') $.textAni5();

                    var className = (docWidth > 480) ? '.iText2' : '.iMtext';
                    $(className).animate({opacity:1}, aniTime8, function(){
                        $('.iTitle').animate({opacity:1});
                    });
                });
            });
        }

    });
});

window.onload = function () {
    $(".changeTitle").letterfx({"fx":"fly-right","backwards":false,"timing":100,"fx_duration":"1200ms","letter_end":"stay","element_end":"stay"});
    $(".changeTitle2").letterfx({"fx":"wave","fx_duration":"500ms","letter_end":"rewind","element_end":"stay"});

    // 모바일 화면 (480) 보다 작을때 
    var docWidth2 = $('html,body').width();
    if(docWidth2 <= 480){
        $("#mediaTitle p:first-child").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        $("#mediaTitle p:first-child").animate({opacity:1}, 1000, function(){
            $("#mediaTitle p:nth-child(2)").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
            $("#mediaTitle p:nth-child(2)").animate({opacity:1}, 1000, function(){
                $("#mediaTitle p:nth-child(3)").animate({opacity:1});
                $("#mediaTitle p:nth-child(3)").letterfx({"fx":"fly-top","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
            });
        });
    }
}