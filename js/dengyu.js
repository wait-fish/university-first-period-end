window.addEventListener("DOMContentLoaded",gogogo);
function gogogo()
{
	// //跟随导航栏---//父级是天空.tiankong//滑块是云.yun
	// var tk = document.querySelectorAll(".sky li"); //父级是天空
	// var yun = document.querySelector(".yun"); //滑块是云
	// var go = yun.offsetLeft;
	// for(var i=0;i<tk.length;i++)
	// 	{
	// 		//鼠标移入
	// 		tk[i].addEventListener("mouseenter",mouseenter);
	// 		//鼠标移出
	// 		tk[i].addEventListener("mouseleave",mouseleave);
	// 		//点击
	// 		tk[i].addEventListener("click",mouseclick);
	// 	}
	// function mouseenter()
	// {
	// 	move(this.offsetLeft,yun);
	// }
	// function mouseleave()
	// {
	// 	move(go,yun);
	// }
	// function mouseclick()
	// {
	// 	yun.style.left = this.offsetLeft + "px";
	// 	go = this.offsetLeft;
	// }
	// //可直接用移动函数-----
	// //云移动	
	// function move(target,yun)
	// //目标位置offsetleft，和云
	// {
	// 	//计时器由云调用，每次调用就清除保证只有一个计时器
	// 	clearInterval(yun.timer);
	// 	yun.timer = setInterval(function()
	// 	{
	// 		//目标距离 / 云的位置
	// 		var speed = (target - yun.offsetLeft)/10;
	// 		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
	// 		if(yun.offsetLeft == target )
	// 		{
	// 			clearInterval(yun.timer);
	// 		}
	// 		yun.style.left = yun.offsetLeft +speed +'px';
	// 	},15);
	// }
	
	//返回顶部----------------gotop
	var goTop = document.querySelector(".gotop");
	goTop.style.display = "none";
	var timers = null;
	console.log(document.documentElement.clientHeight);
	window.addEventListener("scroll",scrollTop);
	function scrollTop()
	{
		//获取被卷去的距离
		var backTop = document.documentElement.scrollTop;
		//如果超出屏幕一个可视窗口距离则显示
		if(backTop>document.documentElement.clientHeight)
		{
			goTop.style.display = "block";
		}else
			{
				goTop.style.display = "none";
			}
		//返回顶部
		goTop.addEventListener("click",goHome);
		
		function goHome()
		{
			clearInterval(timers);
			 timers = setInterval(function()
			{
				backTop = document.documentElement.scrollTop;
				let speed = Math.ceil(backTop/10);
				document.documentElement.scrollTop = backTop - speed;
				console.log(document.documentElement.scrollTop);
				if(document.documentElement.scrollTop == 0)
				{
					clearInterval(timers);
				}
			},10);
			
		}
	}
	
}