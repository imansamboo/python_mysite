$(document).ready(function() {
	/*$('th a').click(function(){
		window.location.href = $(this).attr('href') + '?action=' + 'approve';
		return false;
	});*/
	$('#SmsAccountSpId').change (function(){
		$('#page').val('1');
		if($('#SmsAccountSpId').val()==0){
			document.getElementById('main-form').submit();
		}else if($('#SmsAccountSpId').val()==1){
			document.getElementById('main-form').submit();
		}else if($('#SmsAccountSpId').val()==2){
			document.getElementById('main-form').submit();
		}else if($('#SmsAccountSpId').val()==3){
			document.getElementById('main-form').submit();
		}
	});
});
