$(document).ready(function(){
    var aniEvtMenu = [];
    var docWidth = $('html,body').width();
    $('#header').width(docWidth);

    $( window ).resize( function() {
        docWidth = $('html,body').width();
        $('#header').width(docWidth);

        if(docWidth <= 480) $('.dTextBox').addClass('fontOn');
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




    $.textAni = function(){
        aniEvtMenu.push('textAni');
       
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
        aniEvtMenu.push('textAni1');
        
        setTimeout(function(){$.slide();},4000);
        
        $('.dTitle1').animate({opacity:1}, 1000);
        $(".dTitle1").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        setTimeout(function(){
            $('.dTitle2').animate({opacity:1}, 1000);
            $(".dTitle2").letterfx({"fx":"fade","backwards":false,"timing":100,"fx_duration":"1000ms","letter_end":"stay","element_end":"stay"});
        }, 1000);
    }

    $.textAni2 = function(){
        aniEvtMenu.push('textAni2');

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
    
    var minusNum = 300;

    var aSec = $('#aSec').offset().top - minusNum; 
    var bSec = $('#bSec').offset().top - minusNum; 
    var cSec = $('#cSec').offset().top - minusNum; 
    var dSec = $('#dSec').offset().top - minusNum; 
    var eSec = $('#eSec').offset().top - minusNum; 
    var fSec = $('#fSec').offset().top - minusNum; 
    var gSec = $('#gSec').offset().top - minusNum; 

    $(window).scroll(function(){
        var scrollT = $(window).scrollTop();

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

        // section A scroll evt - steak
        if(scrollT >= aSec && scrollT < bSec) {
            var textAni = (aniEvtMenu.indexOf('textAni') >= 0) ? 'on' : '';
            if(textAni != 'on') $.textAni();
        }

        // section B scroll evt - food 6
        if(scrollT >= bSec && scrollT < cSec) {
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

        // section C scroll evt - cake
        if(scrollT >= cSec && scrollT < dSec) {
            var textAni2 = (aniEvtMenu.indexOf('textAni2') >= 0) ? 'on' : '';
            if(textAni2 != 'on') $.textAni2();
        }

        // section D scroll evt - dessert
        if(scrollT >= dSec && scrollT < eSec) {
            var textAni1 = (aniEvtMenu.indexOf('textAni1') >= 0) ? 'on' : '';
            if(textAni1 != 'on') $.textAni1();
        }

        // section E scroll evt - drink
        if(scrollT >= eSec && scrollT < fSec) {
            $('.eTitle h1').animate({opacity:1}, 1000);
        }

        // section F scroll evt - wine
        if(scrollT >= fSec && scrollT < gSec) {
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

        // section G scroll evt - ade
        if(scrollT >= gSec) {
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

