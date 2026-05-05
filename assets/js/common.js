

/*works＿絞り込み*/
var searchItem = '.search_item';   // 絞り込む項目を選択するエリア
var listItem = '.list_item';       // 絞り込み対象のアイテム
var hideClass = 'is-hide';         // 絞り込み対象外の場合に付与されるclass名
var activeClass = 'is-active';     // 選択中のグループに付与されるclass名

$(function() {
  // 絞り込みを変更した時
  $(searchItem).on('click', function() {
    $(searchItem).removeClass(activeClass);
    var group = $(this).addClass(activeClass).data('group');
    search_filter(group);
  });
});

/**
 * リストの絞り込みを行う
 * @param {String} group data属性の値
 */
function search_filter(group) {
  // 非表示状態を解除
  $(listItem).removeClass(hideClass);
  // 値が空の場合はすべて表示
  if(group === '') {
    return;
  }
  // リスト内の各アイテムをチェック
  for (var i = 0; i < $(listItem).length; i++) {
    // アイテムに設定している項目を取得
    var itemData = $(listItem).eq(i).data('group');
    // 絞り込み対象かどうかを調べる
    if(itemData !== group) {
      $(listItem).eq(i).addClass(hideClass);
    }
  }
}// JavaScript Document

/*topbtn*/
$(function(){
  let topbtn =$("#scrolltop");
  topbtn.hide();
  
  $(window).scroll(function(){
   /* console.log($(this).scrollTop());*/
   /* console.log($(this).height());*/
    if($(this).scrollTop()>600){
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

/*about_about 経歴*/
$(function () {
  $('#js-slider-2').slick({
    arrows: true, // 前・次のボタンを表示する
    dots: true, // ドットナビゲーションを表示する
    appendDots: $('.dots-2'), // ドットナビゲーションの生成位置を変更
    speed: 1000, // スライドさせるスピード（ミリ秒）
    slidesToShow: 1, // 表示させるスライド数
    centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
    variableWidth: true, // スライド幅の自動計算を無効化
  });
});




/*スクロール時の効果*/
  $(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 50){
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
            if (scroll > position - windowHeight + 50){
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
            if (scroll > position - windowHeight + 50){
              $(this).addClass('fadein_right_active');
            }
        });
    });
});
