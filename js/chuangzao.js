$(window).scroll(function()
{
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $("#xuanfu").offset().top - 250;
	if(scrollT>backTop)
	{
		$(".x1").addClass("animated bounceInLeft").removeClass("fade");
		$(".x2").addClass("animated bounceInRight").removeClass("fade");
		$(".x3").addClass("animated bounceInUp").removeClass("fade");
	}
	var gyTop = $("#guangyu").offset().top - 100;
	if(scrollT>gyTop)
	{
		$(".one .left").addClass("animated bounceInLeft").removeClass("fade");
		$(".one .right").addClass("animated bounceInRight").removeClass("fade");
	}
	var gyTop2 = $("#guangyu").offset().top + 400;
	if(scrollT>gyTop2)
	{
		$(".two .right").addClass("animated bounceInLeft").removeClass("fade");
		$(".two .left").addClass("animated bounceInRight").removeClass("fade");
	}
	var xmTop = $("#xiangmu").offset().top;
	if(scrollT>xmTop)
	{
		$(".zhantu .t4").addClass("animated bounceInLeft ").removeClass("fade");
		$(".zhantu .t1").addClass("animated bounceInRight").removeClass("fade");
		$(".zhantu .t3").addClass("animated bounceInUp").removeClass("fade");
		$(".zhantu .t2").addClass("animated bounceInDown").removeClass("fade");
	}
	var wmTop = $("#womeng").offset().top;
	if(scrollT>wmTop)
	{
		$(".w4").addClass("animated bounceInLeft").removeClass("fade");
		$(".w1").addClass("animated bounceInRight").removeClass("fade");
		$(".w2").addClass("animated bounceInUp").removeClass("fade");
		$(".w3").addClass("animated bounceInDown").removeClass("fade");
	}
});