$(function(){
	
	//设置导航的宽度和位置
	$(window).resize(function(){
		$('#my-navbar').width($('#my-slides').width())
		$('#my-navbar').offset({left:$('#my-slides').offset().left})
	});
	
	$(window).trigger('resize')

	//设置动画效果 
	$(".nav-item > a").click(function() {
		event.preventDefault();
		var target = $(this).prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	});
});
