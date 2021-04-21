 // all confirm layer
 var confirm = {
    open : function(title, text, etc){
        $('#confirmModal').css('display','flex');
        confirm.create(title, text, etc);
    },
    create : function(title, text, etc){
        var key = (etc) ? etc.key : '';
        var val = (etc) ? etc.val : '';
        
        var template = '';
        template += '    <div class="confirmBox">';
        template += '        <div class="confirmIcon">';
        template += '            <p><i class="far fa-check-circle"></i></p>';
        template += '        </div>';
        template += '        <div class="confirmInfo">';
        template += '        <div class="confirmTextBox">';
        template += '            <p class="confirmText1 hoonTop">' + title + '</p>';
        template += '            <p class="confirmText2 han">'+ text +'</p>';
        template += '        </div>';
        template += '        </div>';
        template += '        <div class="buttonBox">';
        template += '            <div class="conBtStyle cancleBt" onclick="confirm.cancle();"><p>Cancle</p></div>';
        template += '            <div class="conBtStyle okBt" onclick="confirm.submit(\''+key+'\',\''+val+'\');">Confirm</div>';
        template += '        </div>';
        template += '    </div>';

        $('#confirmModal').html(template);
    },
    cancle : function(){
        $('#confirmModal').css('display','none');
        $('.confirmBox').remove();
    },
    submit : function(key, val){
        switch(key) {
            case 'concept' :
                if(val == 'classic') location.href = './menu.html?concept='+val;
                else confirm.create('NOT PAGE', '아직 준비중인 페이지 입니다.');
                break;
            default :
                console.log('not key');
                confirm.cancle();
                break;
        }
    }
}

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
        $('html,body').css('overflow-y', 'hidden');
    });

    $('.moClose').on('click', function(){
        $('#mobileNavi').css('display','none');
        $('html,body').css('overflow-y', 'auto');
    });

    $('.lClose').on('click', function(){
        $('#popLogin').css('display','none');
        $('html,body').css('overflow-y', 'auto');
        $('.lText').val('');
    });

    $('#login').on('click', function(){
        $('#popLogin').css('display','flex');
        $('html,body').css('overflow-y', 'hidden');
    });

    $.moLogin = function(){
        $('.moClose').click();
        $('#mobileLogin').css('display','flex');
        $('html,body').css('overflow-y', 'hidden');
        
    }

    $('.moLclose').on('click', function(){
        $('#mobileLogin').css('display','none');
        $('html,body').css('overflow-y', 'auto');
        $('.lText').val('');
    });
});