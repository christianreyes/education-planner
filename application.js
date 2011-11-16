$(function(){		
	$(".autoGrow, .notes-autoGrow").autoGrow();
	
	$('a.close').click(function(){
		var parent = $(this).parents("table");
		parent.css("padding", "0 !important");
		parent.fadeOut();
		
		return false;
	});
	
	$("thead").click(function(){
		$(this).siblings().toggle();
	});
});