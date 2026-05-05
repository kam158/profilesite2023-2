

/*addtext_2*/
$(document).ready(function() {
  var timer = false;
  var w = $(window).width();
  var disp = 501; //変更したい画面幅
 /* var changeBox = 501; //変更したい画面幅*/
  var defaultClass = 'text';
  var changeClass = 'text_2';
  var boxName = '.hidden';
  //最初に画面を開いた時
  if (w > disp) {
    $(boxName).removeClass(defaultClass);
    $(boxName).addClass(changeClass);
  }
  //画面の幅をユーザーが変更した時（変更終了した時が実行のタイミング）
  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      var w = $(window).width();
      if (w > disp) {
        $(boxName).removeClass(defaultClass);
        $(boxName).addClass(changeClass);
      }
      if (w < disp) {
        $(boxName).removeClass(changeClass);
        $(boxName).addClass(defaultClass);
      }
    }, 100);
  });
});

/*addshowmore_2*/
$(document).ready(function() {
  var timer = false;
  var w = $(window).width();
  var disp = 501; //変更したい画面幅
 /* var changeBox = 501; //変更したい画面幅*/
  var defaultClass = 'show_more';
  var changeClass = 'show_more_2';
  var boxName = '.sm';
  //最初に画面を開いた時
  if (w > disp) {
    $(boxName).removeClass(defaultClass);
    $(boxName).addClass(changeClass);
  }
  //画面の幅をユーザーが変更した時（変更終了した時が実行のタイミング）
  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      var w = $(window).width();
      if (w > disp) {
        $(boxName).removeClass(defaultClass);
        $(boxName).addClass(changeClass);
      }
      if (w < disp) {
        $(boxName).removeClass(changeClass);
        $(boxName).addClass(defaultClass);
      }
    }, 100);
  });
});


/*max-width:500pxの、showmore*/
$(function() {
  $(".show_more").click(function() {
    var show_text = $(this)
      .parent(".text_wrapper")
      .find(".text");
    var small_height = 280; //This is initial height.
    var original_height = show_text.css({ height: "auto" }).height();

    if (show_text.hasClass("open")) {
      /*CLOSE*/
      show_text.height(original_height).animate({ height: small_height }, 300);
      show_text.removeClass("open");
      $(this)
        .text("+　OPEN")
        .removeClass("active");
    } else {
      /*OPEN*/
      show_text
        .height(small_height)
        .animate({ height: original_height }, 300, function() {
          show_text.height("auto");
        });
      show_text.addClass("open");
      $(this)
        .text("-　CLOSE")
        .addClass("active");
    }
  });
});
/*w501-999 showmore*/
$(function() {
  $(".show_more_2").click(function() {
    var show_text = $(this)
      .parent(".text_wrapper")
      .find(".text_2");
    var small_height = 335; //This is initial height.
    var original_height = show_text.css({ height: "auto" }).height();

    if (show_text.hasClass("open")) {
      /*CLOSE*/
      show_text.height(original_height).animate({ height: small_height }, 300);
      show_text.removeClass("open");
      $(this)
        .text("+　OPEN")
        .removeClass("active");
    } else {
      /*OPEN*/
      show_text
        .height(small_height)
        .animate({ height: original_height }, 300, function() {
          show_text.height("auto");
        });
      show_text.addClass("open");
      $(this)
        .text("-　CLOSE")
        .addClass("active");
    }
  });
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
        $('.fadein_left').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('fadein_left_active');
            }
        });
    });
});

$(function(){
    $(window).scroll(function (){
        $('.fadein_right').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('fadein_right_active');
            }
        });
    });
});




/*main_nav*/
function fadeinmain_let(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.fadein_main_let_trigger').each(function(){ //fadeInUpTriggerというクラス名が
 var elemPos = $(this).offset().top-10; //要素より、50px上の
 var scroll = $(window).scrollTop();
 var windowHeight = $(window).height();
 if (scroll >= elemPos - windowHeight){
 $(this).addClass('fadein_main_let');
  // 画面内に入ったらfadeInというクラス名を追記
 }else{
  $(this).removeClass('fadein_main_let');
 // 画面外に出たらfadeInというクラス名を外す
 }
 });
}
// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeinmain_let();/* アニメーション用の関数を呼ぶ*/
  });


/*main_nav*/
function fadeinfirst(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.fadein_first_trigger').each(function(){ //fadeInUpTriggerというクラス名が
 var elemPos = $(this).offset().top-10; //要素より、50px上の
 var scroll = $(window).scrollTop();
 var windowHeight = $(window).height();
 if (scroll >= elemPos - windowHeight){
 $(this).addClass('fadein_first');
  // 画面内に入ったらfadeInというクラス名を追記
 }else{
  $(this).removeClass('fadein_first');
 // 画面外に出たらfadeInというクラス名を外す
 }
 });
}
// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeinfirst();/* アニメーション用の関数を呼ぶ*/
  });


