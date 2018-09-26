$(function(){
    $('.nav ul li').click(function(){
        $(this).find('span').addClass('active');
        $(this).siblings().find('span').removeClass('active');
    });
    jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:false});
})