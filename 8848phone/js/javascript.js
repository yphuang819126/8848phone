$(function(){
	initPage();
});

$(window).resize(function(){
	initPage();
});

// Init Page
function initPage(){
	var w = $(window).width();
	
//	// 二级页面图片切换
//	$('.M2 .picbox .pic-number a').click(function(){
//		var paged_elem = $(this).parent();
//		var i = $(this).index();
//		if ($(this).parent().prev('.pic-wrapper').children('.pic').eq(i).hasClass('white')) {
//			paged_elem.addClass('white');
//		} else {
//			paged_elem.removeClass('white');
//		}
//		$(this).addClass('active').siblings().removeClass('active');
//		$(this).parent().prev('.pic-wrapper').children('.pic').eq(i).fadeIn(500, function(){
//			$(this).addClass('active');
//		}).siblings().fadeOut(500, function(){
//			$(this).removeClass('active');
//		});
//	});
//	
//	// 自动播放第一组
//	var init1 = 0;
//	var auto1 = function(){
//		init1 < $('.design-2 .pic-number').children('a').length -1 ? init1++ : init1 = 0;
//		$('.design-2 .pic-number').children('a').eq(init1).click();
//		move1 = setTimeout(auto1,3000);
//	}
//	// 停止第一组自动播放
//	$('.design-2 .pic-number').hover(function(){
//		clearTimeout(move1);
//	},function(){
//		move1 = setTimeout(auto1,3000);
//	});
//	// 触发第一组
//	$('.design-2').hover(function(){
//		move1 = setTimeout(auto1,3000);
//	}, function(){
//		clearTimeout(move1);
//	});
//	
//	// 自动播放第二组
//	var init2 = 0;
//	var auto2 = function(){
//		init2 < $('.design-3 .pic-number').children('a').length -1 ? init2++ : init2 = 0;
//		$('.design-3 .pic-number').children('a').eq(init2).click();
//		move2 = setTimeout(auto2,3000);
//	}
//	// 停止第二组自动播放
//	$('.design-3 .pic-number').hover(function(){
//		clearTimeout(move2);
//	},function(){
//		move2 = setTimeout(auto2,3000);
//	});
//	// 触发第二组
//	$('.design-3').hover(function(){
//		move2 = setTimeout(auto2,3000);
//	}, function(){
//		clearTimeout(move2);
//	});
//	
//	// 自动播放第三组
//	var init3 = 0;
//	var auto3 = function(){
//		init3 < $('.design-4 .pic-number').children('a').length -1 ? init3++ : init3 = 0;
//		$('.design-4 .pic-number').children('a').eq(init3).click();
//		move3 = setTimeout(auto3,3000);
//	}
//	// 停止第三组自动播放
//	$('.design-4 .pic-number').hover(function(){
//		clearTimeout(move3);
//	},function(){
//		move3 = setTimeout(auto3,3000);
//	});
//	// 触发第三组
//	$('.design-4').hover(function(){
//		move3 = setTimeout(auto3,3000);
//	}, function(){
//		clearTimeout(move3);
//	});
//	
//	// 自动播放第四组
//	var init4 = 0;
//	var auto4 = function(){
//		init4 < $('.design-5 .pic-number').children('a').length -1 ? init4++ : init4 = 0;
//		$('.design-5 .pic-number').children('a').eq(init4).click();
//		move4 = setTimeout(auto4,3000);
//	}
//	// 停止第四组自动播放
//	$('.design-5 .pic-number').hover(function(){
//		clearTimeout(move4);
//	},function(){
//		move4 = setTimeout(auto4,3000);
//	});
//	// 触发第四组
//	$('.design-5').hover(function(){
//		move4 = setTimeout(auto4,3000);
//	}, function(){
//		clearTimeout(move4);
//	});
//	
//	// 自动播放第五组
//	var init5 = 0;
//	var auto5 = function(){
//		init5 < $('.design-6 .pic-number').children('a').length -1 ? init5++ : init5 = 0;
//		$('.design-6 .pic-number').children('a').eq(init5).click();
//		move5 = setTimeout(auto5,3000);
//	}
//	// 停止第五组自动播放
//	$('.design-6 .pic-number').hover(function(){
//		clearTimeout(move5);
//	},function(){
//		move5 = setTimeout(auto5,3000);
//	});
//	// 触发第五组
//	$('.design-6').hover(function(){
//		move5 = setTimeout(auto5,3000);
//	}, function(){
//		clearTimeout(move5);
//	});
	
	// home
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