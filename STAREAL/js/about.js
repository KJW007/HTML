/**
 * 
 */
function change(){
	if(document.getElementById('nav5btn').value=='编辑')
	{
		document.getElementById('nav5btn').value='保存';
			$('.nav5_text_input').attr("readonly",false)
			$('.nav5_text_input').css('border-bottom','1px solid #d3d3d3')
	}
	else
	{
		document.getElementById('nav5btn').value='编辑'
			$('.nav5_text_input').attr("readonly",true)
			$('.nav5_text_input').css('border','none')
	}
}
function choose(i){
	$("#bar1").css('background','#f7f8fa');
	$("#bar2").css('background','#f7f8fa');
	$("#bar3").css('background','#f7f8fa');
	$("#bar4").css('background','#f7f8fa');
	$("#bar5").css('background','#f7f8fa');
	$("#bar"+i).css('background','#ffdb2e');
	$(".nav1").hide();
	$(".nav2").hide();
	$(".nav3").hide();
	$(".nav4").hide();
	$(".nav5").hide();
	$(".nav"+i).show();
}
$(function(){
	choose(1);
$.ajax({
		url:"http://stareal.cn/mobile/app/main/latest/good",
		dataType:'jsonp',
	     type:'get',
		success: function (data){
			console.log(data)
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
