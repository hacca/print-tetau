
(function($) {
    $(function () {
        if(!$.cookie('load')){
            $('html,body').animate({ scrollTop: 0 }, '1');
            $("body").addClass("vh");
            var loadCount = 0;
            var aCnt = 0;
            imgLength = $("img").length;
            $("img").each(function() {
                var img = new Image();
                img.src = $(this).attr("src");
                var cnt = 0;
                var timer = setInterval(function(){
                    cnt++;
                    if(img.width > 0 || cnt > 10){
                        cnt = 0;
                        clearInterval(timer);
                        imgLength = $("img").length * 3;
                        loadCount++;
                        $(".loading-Bar, .loading-Bar_r").css({
                            "width": (loadCount / imgLength) * 100 + "%"
                        });
                    }
                }, 50);
                var tndST = setInterval(function(){
                    loadCount++;
                    aCnt++;
                    if(aCnt > 9){
                        clearInterval(tndST);
                        aCnt = 0;
                    } else {
                        $(".loading-Bar, .loading-Bar_r").css({
                            "width": (loadCount / imgLength) * 100 + "%"
                        });
                    }
                    if(loadCount > imgLength){
                        $(".loading-Bar, .loading-Bar_r").addClass("out");
                        $(".loading-Img").addClass("framein");
                        $(".loadingWindow").delay(4500).fadeOut(2000);
                        $(".md_logo, .md_companylogo").addClass("show");
                        $('body').delay(5000).queue(function() {
                            $(this).removeClass('vh').dequeue();
                            $('.mainvisual__scroll').addClass('show').dequeue();
                        });
                    }
                },320);
            });
        } else {
            $(".loading-Bar, .loading-Bar_r").hide();
            $(".loadingWindow").hide();
            $(".md_logo, .md_companylogo").addClass("show_nodelay");
        }
        $.cookie('load', 'load_object', { expires: 1, path: '/' });
    });
})(jQuery);
