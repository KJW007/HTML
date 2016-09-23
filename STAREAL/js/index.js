/**
 * 
 */
/*function serAdv(){
	$.ajax({
		url:"http://stareal.cn/mobile/app/main/latest/good",
		data:{
			id:'',
			thumb:'',
			title:'',
		}
	});
}*/
var c=60;
var t ;
function timedCount() 
{ 
	document.getElementById('code_btn').value='重新发送（'+c+'s）' 
	c=c-1 
	if(c==-1)
	{
		stopCount();
	}
	else{
		
		t=setTimeout("timedCount()",1000)
		
	}

} 
function stopCount() 
{ 
	
	document.getElementById('code_btn').value='获取验证码'
		$("#code_btn").attr("disabled", false)
		c=60;
		clearTimeout(t) 
} 
function a(){
	var Phonenum=document.getElementById('phone').value;
	var Phonelen=document.getElementById('phone').value.length;
	var s=Phonenum.substr(0, 2);
	if(Phonelen!=11||(s!="13"&&s!="14"&&s!="15"&&s!="17"&&s!="18"))
	{
		$('.return_info').html('请输入正确的手机号')
	}else
	{
		$('.return_info').html('')
		$("#code_btn").attr("disabled", true);
		timedCount()
		$.ajax({
			url:"http://stareal.cn/mobile/app/login/code/retrieve",
			data : {
				mobile:document.getElementById('phone').value,
				type:0,		
			},
		    type:'POST',
			success: function (){
					alert('验证码已发送至'+document.getElementById('phone').value)
			}  
		});
	}
}
function register(){
	var at;
	$.ajax({
		url:"http://stareal.cn/mobile/app/login/code/retrieve",
		data : {
			code:document.getElementById('code').value,
			mobile:document.getElementById('phone').value,
			type:1,		
		},
	    type:'POST',
		success: function (data){
			alert(document.getElementById('phone').value+'萨乌丁撒旦'+document.getElementById('code').value)
			
			console.log(eval(data))
			at=data.accessToken
		}  
	});
	/*$.ajax({
		url:"http://stareal.cn/mobile/app/login/user/create",
		data :{
			mobile:document.getElementById('phone').value,
			code:document.getElementById('code').value,
			password:document.getElementById('rpassword').value,
			nickname:document.getElementById('nickname').value,
			//accessToken:at,
		},
		dataType:'json',
	    type:'POST',
		success: function (data){
			alert($('#registerform').serialize())
			console.log(eval(data))
			if(data.message=="验证码错误或已过期")
			{	
				$('.return_info').html(data.message)
				
				
			}else{
				$('.return_info').html(data.accessToken)
			}
		}  
	});*/
	
}
function login(){

	
	$.ajax({
		url:"http://stareal.cn/mobile/app/login/user/retrieve",
		data : $('#loginform').serialize(),
		dataType:'json',
	    type:'POST',
		success: function (data){
			console.log(eval(data))
			if(data.message=="用户名或密码错误")
			{	
				$('.return_info').html(data.message)
				
				
			}else{
				ClickClose();
				$('.a_login').hide();
				$('.nickname').html(data.nickname);
				$('.nickname').show();
				document.getElementById('person_hp').src=data.headimgurl;
				$('.cover_nav_hp').show();
				
			}
		}  
	});

}
$(function(){
	var i=1;

	$.ajax({
		url:"http://stareal.cn/mobile/app/main/latest/good",
		dataType:'json',
	    type:'get',
		success: function (data){
			console.log(eval(data))

			for(i=1;i<=7;i++){
				$("#ht"+i).html(data.data[i-1].title);
				$("#hpr"+i).html('￥'+data.data[i-1].id+'起');	
				document.getElementById('hp'+i).src=data.data[i-1].thumb;
			}
		}  
	});
	$.ajax({
		url:"http://stareal.cn/mobile/app/main/latest/activity",
		dataType:'json',
	    type:'get',
		success: function (data){
			console.log(eval(data))
			document.getElementById('input_main_top').placeholder=data.data[0].title;
			document.getElementById('input_main_fix').placeholder=data.data[0].title;
			for(i=1;i<=7;i++){
				$("#t"+i).html(data.data[i-1].title);
				$("#pr"+i).html('￥'+data.data[i-1].id+'起');	
				document.getElementById('p'+i).src=data.data[i-1].thumb;
				
			}
		}  
	});
	$.ajax({
		url:"http://stareal.cn/mobile/app/main/latest/rest",
		dataType:'json',
	    type:'get',
		success: function (data){
			console.log(eval(data))
			for(i=1;i<=7;i++){
				$("#wt"+i).html(data.data[i-1].title);
				$("#wpr"+i).html('￥'+data.data[i-1].id+'起');
				document.getElementById('wp'+i).src=data.data[i-1].thumb;
			}
		}  
	});
	$(".register").hide();
	$(window).scroll(function() {	
		var winPos = $(window).scrollTop();
		var i=0;
			if(winPos>=150)
			{
				$(".fix").show();	
			}
			else
			{
				$(".fix").hide();
			}		
	});
});
function Login(){
	$(".login_dialog").show();
	$(".login_dialog").animate({opacity:'1'},800);
}
function CheckPhonenumber(){
	var Phonenum=document.getElementById('username').value;
	var Phonelen=document.getElementById('username').value.length;
	var s=Phonenum.substr(0, 2);
	if(Phonelen!=11||(s!="13"&&s!="14"&&s!="15"&&s!="17"&&s!="18"))
	{
		document.getElementById('username').value="";
		$("#username").attr('placeholder','请输入正确的手机号码！！！');
	}
	
}
function ClickRegister(){
	$(".login").hide();
	setTimeout(function(){
		$(".register").show();
		$(".login_dialog_box_top_login a").css('color','#4d4d4d');
		$(".login_dialog_box_top_register a").css('color','#000');
	},400);
	$(".login_dialog_box_mid").animate({height:'440px'},400);
	$(".login_dialog_box_top_login a").animate({fontSize:'20px'},400);
	$(".login_dialog_box").animate({height:'530px'},400);
	$(".login_dialog_box_top_register a").animate({fontSize:'25px'},400);	
}
function ClickLogin(){
	$(".register").hide();
	setTimeout(function(){
		$(".login").show();
		$(".login_dialog_box_top_login a").css('color','#000');
		$(".login_dialog_box_top_register a").css('color','#4d4d4d');
	},400);
	$(".login_dialog_box_mid").animate({height:'220px'},400);
	$(".login_dialog_box_top_login a").animate({fontSize:'25px'},400);	
	$(".login_dialog_box").animate({height:'310px'},400);
	$(".login_dialog_box_top_register a").animate({fontSize:'20px'},400);	
}
function ClickClose(){	
	setTimeout(function(){
		$(".login_dialog").hide();	
		$("#input_main_top").attr('placeholder','这是一个测试');
		$("#input_main_fix").attr('placeholder','这是一个测试');
		$('.return_info').html('')
		document.getElementById('username').value="";
		document.getElementById('password').value="";
		document.getElementById('phone').value="";
		document.getElementById('code').value="";
		document.getElementById('nickname').value="";
		document.getElementById('rpassword').value="";
		document.getElementById('code_btn').value='获取验证码'

	},800);
	$(".login_dialog").animate({opacity:'0'},800);
}
function OnBox1(){
		$(".list_bar1").show();	
		$(".list_bar1").animate({height:'320px'},200);		
}
function LeaveBox1(){
	setTimeout(function(){
		$(".list_bar1").hide();	
		$(".list_bar1").css('background','#D4B508');
	},200);
	$(".list_bar1").css('background','#F8DD3F');
	$(".list_bar1").animate({height:'0px'},200);
	
}
