$(document).ready(function() {
	
	$("#load").click(function(){
		var x=window.confirm("آیا میخواهید بارگذاری مجدد کنید؟")
		if (x){
			$('#reload').css('visibility', 'hidden').fadeOut("fast");
			var url = document.location.href+'&load=true';
			window.location = url;
		}else{
		}

		/*$('#reload').css('visibility', 'hidden').fadeOut("fast");
		var url = document.location.href+'&load=true';
		window.location = url;*/
	});
		
	
});
