$(function(){
	initPage();
	$.ajax({
		type:"get",
		url:"js/new_file01.json",
		async:true,
		success:function(data){
			$.each(data.nav, function(i,t) {
				$(".clearfix li:eq("+i+") a").html(t);
			});
		}
	});
});

$(window).resize(function(){
	initPage();
});

// Init Page
function initPage(){
	var w = $(window).width();
	

	$('.feature-content ul li a').hover(function(){
		$(this).children('.content').animate({
			"padding-top":"60px",
			"height":"100px"
		}, 200);
	}, function(){
		$(this).children('.content').animate({
			"padding-top":"85px",
			"height":"30px"
		}, 200);
	});
	
	// brand topic pic
	$('[node-type="screen-pic"]').width(w);
	$('[node-type="screen-pic"]').height(parseInt(w*74/168));
	
	var picLen = $('.pic-body ul li').length;
	$('.left-arrow, .right-arrow').click(function(){
		num = parseInt($(this).attr('number'));
		if ($(this).hasClass('left-arrow')) {
			if (num == 0) {
				num = picLen-1;
			} else {
				num--;
			}
			$('.pic-body').find('li').eq(num).fadeIn(500, function(){
				$(this).addClass("active");
			}).siblings().fadeOut(500).removeClass("active");
		} else {
			if (num == picLen-1) {
				num = 0;
			} else {
				num++;
			}
			$('.pic-body').find('li').eq(num).fadeIn(500, function(){
				$(this).addClass("active");
			}).siblings().fadeOut(500).removeClass("active");
		}
		$('.left-arrow, .right-arrow').attr('number', num);
	});
	
	// 私人订制页选项卡
	$('.custom-tab a').click(function(){
		$("html, body").animate({
			scrollTop : scrollTop
		}, 500);
	});
	
	
	// 右侧底部工具栏
	$('.tools-bar .customer').hover(function(){
		$('.tools-bar .nav-content').toggle();
	});
	$('.gotop').click(function(){
		 $("html,body").animate({scrollTop:0}, 500);
	});
	

}

function box_show(box) {
	$('.opacity-bg').show();
	$('.'+box).show();
	$('.opacity-bg').one('click', function(){
		box_hide();
	});
}
function box_hide() {
	$('.opacity-bg').hide();
	$('.box').hide();
}