$(document).ready(function(){
	$(".closeBttn").click(function(){
 $(".sidenav").css("width","0");
});
	$(".openBttn").click(function(){
		$(".sidenav").css("width","350px");
		// $(".openBttn").css("transform","rotate(360deg)");
	});

});