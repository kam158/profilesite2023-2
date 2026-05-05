// JavaScript Document

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