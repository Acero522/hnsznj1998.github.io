//加载完毕触发
window.onload = function(){
	var obtin = document.getElementById('button');
	var timer = null;
	obtin.onclick = function () {
		//定时器
		timer = setInterval(function(){
			//获取距离顶部高度
         var toTop = document.documentElement.scrollTop || document.body.scrollTop;
		  document.documentElement.scrollTo=document.body.scrollTop -= 5;
		  if (toTop ==0) {
		  	clearInterval(timer);
		  }
		},30);
		
	}
}