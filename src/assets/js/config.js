(function($) {
    $(function(){

        //header fix
        if($('#fixnav').length){
            var nav = $('#fixnav');
            var navheight = nav.height();
            var navTop = nav.offset().top + navheight;
            var showFlag = false;
        }
        $(window).scroll(function () {
            var windowTop = $(this).scrollTop();
            if (windowTop >= navTop) {
                if (showFlag == false) {
                    showFlag = true;
                    nav.addClass('fixed');
                }
            } else if (windowTop < navTop) {
                if (showFlag) {
                    showFlag = false;
                    nav.removeClass('fixed');
                }
            }
        })

        //スムーズスクロール
        $('a[href^="#"]').click(function(){
            var speed = 600;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
        var url = $(location).attr('href');
        if (url.indexOf("?id=") == -1) {
        }else{
            var url_sp = url.split("?id=");
            var hash   = '#' + url_sp[url_sp.length - 1];
            var tgt    = $(hash);
            var pos    = tgt.offset().top;
            $("html, body").animate({scrollTop:pos}, 600, "swing");
        }
    });
})(jQuery);

