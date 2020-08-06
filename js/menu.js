$(document).ready(function(){
    var docWidth = $('html,body').width();
    $('#header').width(docWidth);

    $( window ).resize( function() {
        localStorage.clear(); 
        docWidth = $('html,body').width();
        $('#header').width(docWidth);
    });

    var menuLineWidth = {
        'brand' : '42px',
        'menu' : '42px',
        'benefit' : '52px',
        'store' : '38px',
        'customer' : '68px'
    }
    $('#menu div').css('width', menuLineWidth['menu']);
    $('.menu').mouseenter(function(){
        $('.menu div').css('width', 0);

        var id = $(this).attr('id');
        if(id == 'login'){
            $('#menu div').css('width', menuLineWidth['menu']);
            return;
        }
        var select = '#' + $(this).attr('id') + ' div';
        $(select).css('width', menuLineWidth[id]);
    });

    $('.menu').mouseleave(function(){
        $('.menu div').css('width', 0);
        $('#menu div').css('width', menuLineWidth['menu']);
    });

    var typeLineWidth = {
        'classic' : '46px',
        'premium' : '64px',
        'queens' : '52px',
        'grill' : '50px'
    }
    $('#classic div').css('width', typeLineWidth['classic']);
    $('.tMenu').mouseenter(function(){
        $('.tMenu div').css('width', 0);

        var id = $(this).attr('id');
        if(id == 'login'){
            $('#classic div').css('width', typeLineWidth['classic']);
            return;
        }
        var select = '#' + $(this).attr('id') + ' div';
        $(select).css('width', typeLineWidth[id]);
    });

    $('.tMenu').mouseleave(function(){
        $('.tMenu div').css('width', 0);
        $('#classic div').css('width', typeLineWidth['classic']);
    });


    var aSec = $('#aSec').offset().top; 
    var bSec = $('#bSec').offset().top; 
    var cSec = $('#cSec').offset().top; 
    var dSec = $('#dSec').offset().top; 
    var eSec = $('#eSec').offset().top; 
    var fSec = $('#fSec').offset().top; 
    var gSec = $('#gSec').offset().top; 
    var minusNum = 500;
    var minusNumMidea = 300;

    $.textAni = function(){
        localStorage.setItem('textAni', 'on');
       
        $('#aImgBox').animate({opacity:1}, 1200);
        $('.aTitle').animate({opacity:1}, 1000);
        $(".aTitle").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        setTimeout(function(){
            $('.aTitle2').animate({opacity:1}, 1000, function(){
                $('.aPrice').animate({opacity:1}, 1000, function(){
                    $('.aText').animate({opacity:1}, 1000);
                    $('.aMediaText').animate({opacity:1}, 1000);
                });
            });
            $(".aTitle2").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1200ms","letter_end":"stay","element_end":"stay"});
        }, 1000);
    }

    $.textAni1 = function(){
        localStorage.setItem('textAni1', 'on');
        
        setTimeout(function(){$.slide();},4000);
        
        $('.dTitle1').animate({opacity:1}, 1000);
        $(".dTitle1").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        setTimeout(function(){
            $('.dTitle2').animate({opacity:1}, 1000);
            $(".dTitle2").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        }, 1000);
    }

    $.textAni2 = function(){
        localStorage.setItem('textAni2', 'on');

        $('#cImgBox img').animate({'margin-left':0}, 1400);
        $('.cTitle').animate({opacity:1}, 1000);
        $(".cTitle").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        setTimeout(function(){
            $('.cTitle2').animate({opacity:1}, 1000, function(){
                $('.cPrice').animate({opacity:1}, 1000, function(){
                    $('.cText').animate({opacity:1}, 1000);
                    $('.cMediaText').animate({opacity:1}, 1000);
                });
            });
            $(".cTitle2").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        }, 1000);
    }
    
    var cnt = 0;
    $.slide = function(val){
        if(docWidth <= 480) {
            $('.dTextBox').addClass('fontOn');
            return;
        }
        $('.dTextBox').removeClass('fontOn');
        $('.dImgInfo img').removeClass('dImgOn');
        $(".slideL").removeClass('slOn');

        $(".dImgInfo").eq(1).find('.dTextBox').addClass('fontOn');
        $(".dImgInfo").eq(1).find('img').addClass('dImgOn');

        $('.dSlide').animate({'margin-left': '-325px'}, 800 ,function(){
            $('.dImgInfo:first').appendTo('.dSlide');
            $('.dSlide').css('margin-left','0');
        });

        cnt++;
        if(cnt > 4) cnt = 0;
        $(".slideL").eq(cnt).addClass('slOn');

        var timeLoop = setTimeout(function(){$.slide()}, 4000);
    }
    
    $(window).scroll(function(){
        var scrollT = $(this).scrollTop();

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
        } else {
            if(scrollT >= 100) { 
                $('#topBt').fadeIn('slow');
                $('#topBt').css('display','flex');
            } else {
                $('#topBt').fadeOut('slow');
            }
        }

        // section A scroll evt
        if(scrollT >= aSec - minusNum) {
            var textAni = localStorage.getItem('textAni');
            if(textAni != 'on') $.textAni();
        }

        // section B scroll evt
        if(scrollT >= bSec - minusNum) {
            var aniTime = 800;

            $('.bBox:first-child .food1 img').animate({opacity:1}, aniTime, function(){
                $('.bBox:first-child .food2 img').animate({opacity:1}, aniTime, function(){
                    $('.bBox:first-child .food3 img').animate({opacity:1}, aniTime, function(){
                        $('.bBox:last-child .food1 img').animate({opacity:1}, aniTime, function(){
                            $('.bBox:last-child .food2 img').animate({opacity:1}, aniTime, function(){
                                $('.bBox:last-child .food3 img').animate({opacity:1}, aniTime);
                            });
                        });
                    });
                });
            });
        }

        // section C scroll evt
        if(scrollT >= cSec - minusNum) {
            var textAni2 = localStorage.getItem('textAni2');
            if(textAni2 != 'on') $.textAni2();
        }

        // section D scroll evt
        if(scrollT >= dSec - minusNum) {
            var textAni1 = localStorage.getItem('textAni1');
            if(textAni1 != 'on') $.textAni1();
        }

        // section E scroll evt
        if(scrollT >= eSec - minusNum && scrollT < fSec - minusNum) {
            $('.eTitle h1').animate({opacity:1}, 1000);
            $("#video").get(0).play();
        } else {
            $("#video").get(0).pause();
        }

        // section F scroll evt
        if(scrollT >= fSec - minusNum) {
            $('.fBox p:first-child').animate({opacity:1}, 600, function(){
                $('.fBox p:last-child').animate({opacity:1}, 600, function(){
                    $('.evtBox').animate({opacity:1}, 1000, function(){
                        $('.starColor1').addClass('cp');
                        $('.starColor2').addClass('sp');
                        $('.starColor3').addClass('tp');
                        $('.starColor4').addClass('bp');
                    });
                });
            });
        }

        // section G scroll evt
        if(scrollT >= gSec - minusNum) {
            $('.gBox p:first-child').animate({opacity:1}, 600, function(){
                $('.gBox p:last-child').animate({opacity:1}, 600, function(){
                    $('.gImg img').animate({'margin-left':0}, 1000, function(){
                        $('.gText').animate({opacity:1}, 1000);
                    });
                });
            });
        }

    });




    
});

window.onload = function () {
    localStorage.clear(); 

    // 모바일 화면 (480) 보다 작을때 
    var docWidth2 = $('html,body').width();
    if(docWidth2 <= 480){
        $('.dTextBox').addClass('fontOn');
    }
}