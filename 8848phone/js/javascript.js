$(function  () {
	$.ajax({
		type:"get",
		url:"js/8848-0.json",
		async:true,
		success:function(data) {
			$.each(data.navTag,function(v, t) {
				$("<li><a href='#'>"+t+"</a></li>").appendTo($(".nav .clearfix"))
			})
		}	
	});
})
