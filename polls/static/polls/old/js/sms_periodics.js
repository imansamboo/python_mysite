$(document).ready(function() {
	$("#showfile").click(function(){
		$('#rownum').css('visibility', 'hidden').fadeOut("fast");
		$('#rowfile').css('visibility', 'visible');
		$('#rowfile').fadeIn("fast").removeAttr('disabled');
	});
	$("#shownum").click(function(){
		$('#rowfile').css('visibility', 'hidden').fadeOut("fast");
		$('#rownum').css('visibility', 'visible');
		$('#rownum').fadeIn("fast").removeAttr('disabled');
	});
});
