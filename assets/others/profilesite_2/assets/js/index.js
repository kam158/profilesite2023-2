$(document).ready(function(){
	if (window.matchMedia('(max-width: 899px)').matches) {
    $('.slider').slick({
        autoplay: false,//自動的に動き出すか。初期値はfalse。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        slidesToShow: 2,//スライドを画面に3枚見せる
        slidesToScroll: 2,//1回のスクロールで3枚の写真を移動して見せる
        prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
        dots: true,//下部ドットナビゲーションの表示
        responsive: [
        {
          breakpoint: 426,//モニターの横幅が426px以下の見せ方
          settings: {
            slidesToShow: 1,//スライドを画面に1枚見せる
            slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
          }
        }
      ]
	});
	}
});
/*
statusCode: {
            0: function () {
              //$(".end-message").slideDown();
              //$(".submit-btn").fadeOut();
              window.location.href = "thanks.html";
            },*/

/*お問合せフォームメッセージ*/
$(document).ready(function () {

      $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
          url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdjkawNF2XxKrMSnRRcSVbL4CzUqz3Rj0Q9nsCtSpC7tV-d3w/formResponse",
          data: formData,
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
              $(".end-message").slideDown();
              $(".submit-btn").fadeOut();
              //window.location.href = "thanks.html";
            },
            200: function () {
              $(".false-message").slideDown();
            }
          }
        });
        event.preventDefault();
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
            if (scroll > position - windowHeight + 150){
              $(this).addClass('fadein_right_active');
            }
        });
    });
});

/*main*/
// 動きのきっかけとなるアニメーションの名前を定義
function fadeinmain(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.fadein_main_trigger').each(function(){ //fadeInUpTriggerというクラス名が
 var elemPos = $(this).offset().top-10; //要素より、50px上の
 var scroll = $(window).scrollTop();
 var windowHeight = $(window).height();
 if (scroll >= elemPos - windowHeight){
 $(this).addClass('fadein_main');
  // 画面内に入ったらfadeInというクラス名を追記
 }else{
  $(this).removeClass('fadein_main');
 // 画面外に出たらfadeInというクラス名を外す
 }
 });
}

$('.fadein_main_trigger_2').each(function(){ //fadeInUpTriggerというクラス名が
 var elemPos = $(this).offset().top-10; //要素より、50px上の
 var scroll = $(window).scrollTop();
 var windowHeight = $(window).height();
 if (scroll >= elemPos - windowHeight){
 $(this).addClass('fadein_main_2');
  // 画面内に入ったらfadeInというクラス名を追記
 }else{
  $(this).removeClass('fadein_main_2');
 // 画面外に出たらfadeInというクラス名を外す
 }
 });

$('.fadein_main_trigger_3').each(function(){ //fadeInUpTriggerというクラス名が
 var elemPos = $(this).offset().top-10; //要素より、50px上の
 var scroll = $(window).scrollTop();
 var windowHeight = $(window).height();
 if (scroll >= elemPos - windowHeight){
 $(this).addClass('fadein_main_3');
  // 画面内に入ったらfadeInというクラス名を追記
 }else{
  $(this).removeClass('fadein_main_3');
 // 画面外に出たらfadeInというクラス名を外す
 }
 });

$('.fadein_main_trigger_4').each(function(){ //fadeInUpTriggerというクラス名が
 var elemPos = $(this).offset().top-10; //要素より、50px上の
 var scroll = $(window).scrollTop();
 var windowHeight = $(window).height();
 if (scroll >= elemPos - windowHeight){
 $(this).addClass('fadein_main_4');
  // 画面内に入ったらfadeInというクラス名を追記
 }else{
  $(this).removeClass('fadein_main_4');
 // 画面外に出たらfadeInというクラス名を外す
 }
 });

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeinmain();/* アニメーション用の関数を呼ぶ*/
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










