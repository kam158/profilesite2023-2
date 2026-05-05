// JavaScript Document

/*topbtn*/
$(function(){
  let topbtn =$("#scrolltop");
  topbtn.hide();
  
  $(window).scroll(function(){
   /* console.log($(this).scrollTop());*/
   /* console.log($(this).height());*/
    if($(this).scrollTop()>100){
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



/*addcenter*/
$(document).ready(function() {
  var timer = false;
  var w = $(window).width();
  var disp = 634; //変更したい画面幅
 /* var changeBox = 501; //変更したい画面幅*/
 /* var defaultClass = 'text';*/
  var changeClass = 'center';
  var boxName = '.flex';
  //最初に画面を開いた時
  if (w < disp) {
   /* $(boxName).removeClass(defaultClass);*/
    $(boxName).addClass(changeClass);
  }
  //画面の幅をユーザーが変更した時（変更終了した時が実行のタイミング）
  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      var w = $(window).width();
      if (w < disp) {
       /* $(boxName).removeClass(defaultClass);*/
        $(boxName).addClass(changeClass);
      }
      if (w > disp) {
        $(boxName).removeClass(changeClass);
       /* $(boxName).addClass(defaultClass);*/
      }
    }, 100);
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
/*fadeinrightfiest*/
function fadeinrightfirst(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.fadein_right_first_trigger').each(function(){ //fadeInUpTriggerというクラス名が
 var elemPos = $(this).offset().top-10; //要素より、50px上の
 var scroll = $(window).scrollTop();
 var windowHeight = $(window).height();
 if (scroll >= elemPos - windowHeight){
 $(this).addClass('fadein_right_first');
  // 画面内に入ったらfadeInというクラス名を追記
 }else{
  $(this).removeClass('fadein_right_first');
 // 画面外に出たらfadeInというクラス名を外す
 }
 });
}
// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeinrightfirst();/* アニメーション用の関数を呼ぶ*/
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

/*main_nav_2*/
function fadeinmain_let_2(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.fadein_main_let_2_trigger').each(function(){ //fadeInUpTriggerというクラス名が
 var elemPos = $(this).offset().top-10; //要素より、50px上の
 var scroll = $(window).scrollTop();
 var windowHeight = $(window).height();
 if (scroll >= elemPos - windowHeight){
 $(this).addClass('fadein_main_let_2');
  // 画面内に入ったらfadeInというクラス名を追記
 }else{
  $(this).removeClass('fadein_main_let_2');
 // 画面外に出たらfadeInというクラス名を外す
 }
 });
}
// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeinmain_let_2();/* アニメーション用の関数を呼ぶ*/
  });





// 動きのきっかけとなるアニメーションの名前を定義
function flipLeftTopAnime(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.flipLeftTop_trigger').each(function(){ //fadeInUpTriggerというクラス名が
　　var elemPos = $(this).offset().top-10; //要素より、50px上の
　　var scroll = $(window).scrollTop();
　　var windowHeight = $(window).height();
　　if (scroll >= elemPos - windowHeight){
　　$(this).addClass('flipLeftTop');
　　// 画面内に入ったらfadeInというクラス名を追記
　　}else{
　　　$(this).removeClass('flipLeftTop');
　　// 画面外に出たらfadeInというクラス名を外す
　　}
　　});
}
// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    flipLeftTopAnime();/* アニメーション用の関数を呼ぶ*/
  });