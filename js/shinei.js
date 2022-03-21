$(window).scroll(function()
{
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $("#newsheji").offset().top;
	if(scrollT>backTop)
	{
		$(".left1").addClass("animated bounceInLeft").removeClass("fade");
		$(".right1").addClass("animated bounceInRight").removeClass("fade");
		$(".top1").addClass("animated bounceInUp").removeClass("fade");
		$(".bottom1").addClass("animated bounceInDown").removeClass("fade");
	}
});