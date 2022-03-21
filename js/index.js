$(window).scroll(function()
{
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $("#hualang").offset().top;
	if(scrollT>backTop)
	{
		$(".neirong li:even").addClass("animated bounceInLeft").removeClass("fade");
		$(".neirong li:odd").addClass("animated bounceInRight").removeClass("fade");
	}
});
	