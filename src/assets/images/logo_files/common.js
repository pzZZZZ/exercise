function pageBack(){
	var urlLink = document.referrer;
	if (urlLink != null && urlLink != "")
	{
		urlLink = urlLink.toLowerCase();
		if (urlLink.indexOf("m.hua.com") > -1) {
			 window.history.back();
			 window.location.load(window.location.href);
		}
		else { window.location.href="/";}
	}
	else
	{
		window.location.href="/";
	}
}
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?ae896b60487020696d3df0e260c080bf";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

function goTop(){
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
}

function ShowMenu()
{
	if($("#CMenu").is(":hidden")){
		   $("#CMenu").show();
	}else{
		  $("#CMenu").hide();
	}
}

function SetCookie(name,value)					   //两个参数，一个是cookie的名子，一个是值
{
	var Days = 30; //此 cookie 将被保存 30 天 
	var exp = new Date();    //new Date("December 31, 9998");   
	exp.setTime(exp.getTime() + Days*24*60*60*1000);     
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
} 
 
function GetCookie(name)//取cookies函数       
{     
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));      
	if(arr != null) return unescape(arr[2]); 
	return null;      
}  