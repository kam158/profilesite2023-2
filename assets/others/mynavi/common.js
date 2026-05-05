// JavaScript Document
$(function(){
/*topbtn*/
  let topbtn =$("#scrolltop");
  topbtn.hide();
  
  $(window).scroll(function(){
   /* console.log($(this).scrollTop());*/
   /* console.log($(this).height());*/
    if($(this).scrollTop()>800){
      topbtn.fadeIn();
    }
    else{
      topbtn.fadeOut();
    }
  });
    topbtn.on("click",function(event){
      event.preventDefault();
      $("body,html").animate({
        scrollTop:0
      },500);
      return false;
    })
});

/*hamburger*/
  /*ハンバーガーメニューをクリックした時*/
  $(function () {
    if ($('#toggle').length > 0) {
		$('#toggle').click(function () {
			$(this).toggleClass('hamburger_active');
			$('#nav_bg').fadeToggle();
			$('html').toggleClass('nav_bg_open');
			$('nav').toggleClass('nav_open');
			
			if ($(this).hasClass('hamburger_active')) {
				$('nav').removeClass('nav_close');
			} else {
				$('nav').addClass('nav_close');
			}
		});
		/*nav_bgをクリックした時*/
		$('#nav_bg').click(function () {
			$(this).fadeOut();
			$('#toggle').removeClass('hamburger_active');
			$('html').removeClass('nav_bg_open');
			$('nav').removeClass('nav_open');
			$('nav').addClass('nav_close');
		});
      
    /*aタグをクリックした時*/
    $("nav a").on("click", function () {
      $('#toggle').removeClass('hamburger_active');
      $('html').removeClass('nav_bg_open');
      $('#nav_bg').fadeToggle();
      $('nav').removeClass('nav_open');
      $('nav').addClass('nav_close');
    });
    /*aタグをクリックした時のスクロール*/  
    $('a[href^="#"]').click(function () {
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });
  }    
});
  
  
/*スクロール時の効果*/
  $(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('fadein_active');
            }
        });
    });
});
 $(function(){
    $(window).scroll(function (){
        $('.cv_fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('cv_fadein_active');
            }
        });
    });
});

$(function(){
    $(window).scroll(function (){
        $('.kyuujin_fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('kyuujin_fadein_active');
            }
        });
    });
});

  
  
  
  
