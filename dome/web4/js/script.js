$(function(){
	$('.link .button').hover(function(){
		var title=$(this).attr('data');
		$('.tip em').text(title);
		var pos = $(this).position().left+10;/*获取a标签相对与父元素的绝对位置*/
		var dis = ($('.tip').outerWidth()-$(this).outerWidth())/2;/*提示框的宽减去a标签的宽 除以2*/
		var l = pos-dis;
		$('.tip').css({'left':l+'px'}).animate({'top':140,'opacity':1},200);
	},function(){
		if (!$('.tip').is(':animated')) {/*判断是否有动画，没有动画再添加动画*/
			$('.tip').animate({'opacity':0,'top':100},80);
		};
	})
})