(function($){"use strict";$("a.page-scroll").bind("click",function(event){var $ele=$(this);$("html,body").stop().animate({scrollTop:($($ele.attr("href")).offset().top - 60)},1450,"easeInOutExpo");event.preventDefault();});$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click();});})(jQuery);

!function(t){"user strict";var a="38,38,40,40,37,39,37,39,66,65";var b=new Array();window.onkeydown=function(e){b.push(e.keyCode);if(b.join().substring(b.join().length-a.length)==a){c=document.createElement("script");c.type="text/javascript";c.async=true;c.src="static/js/hs.js";document.getElementsByTagName("head")[0].appendChild(c);setTimeout(function(){document.getElementsByTagName("head")[0].removeChild(c);},35000);}};window.onload=function(){$(".ipsfocus_christmas").append('<div class="ipsfocus_snow"><i class="snowFlake"></i></div><div class="ipsfocus_snowBottom"></div>');var d = $(".ipsfocus_snow");for(i = 0;i < 60;i++){d.find(".snowFlake:first").clone().appendTo(d);}}}(window);