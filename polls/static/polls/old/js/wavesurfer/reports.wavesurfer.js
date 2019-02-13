function formatTime(time){
	time = Math.round(time);
	var minutes = Math.floor(time / 60),
	seconds = time - minutes * 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	return minutes + ":" + seconds;
}

$(document).ready(function() {
	if($('#voicePlayer #voicePlayerWave').length>0)
		WaveSurferInit();
});

function WaveSurferInit()
{
	voicePlayer = WaveSurfer.create({
		container: '#voicePlayer #voicePlayerWave',
		waveColor: '#2BAFA9',
		progressColor: '#B2D0CE',
		height:'60'
	});

	voicePlayer.on('finish',function(){$('#voicePlayer .voicePlayerControls .btn-playpause').removeClass('btn-pause').addClass('btn-play');});
	voicePlayer.on('play',function(){
		$('#voicePlayer .voicePlayerControls .btn-playpause').removeClass('btn-play').addClass('btn-pause');
		if(typeof voicePlayerTimer !='undefined')
			clearInterval(voicePlayerTimer);
		voicePlayerTimer = setInterval(function() {
			$('#voicePlayer .timebar .time-start').text(formatTime(voicePlayer.getCurrentTime()));
		}, 1000);
	});

	voicePlayer.on('pause',function(){
		$('#voicePlayer .voicePlayerControls .btn-playpause').removeClass('btn-pause').addClass('btn-play');
		if(typeof voicePlayerTimer !='undefined')
			clearInterval(voicePlayerTimer);
	});
	voicePlayer.on('seek',function(){
		$('#voicePlayer .timebar .time-start').text(formatTime(voicePlayer.getCurrentTime()));
	});

	voicePlayer.on('ready',function(){
		$('#voicePlayer .timebar .time-start').text('00:00');
		$('#voicePlayer .timebar .time-end').text(formatTime(voicePlayer.getDuration()));
		voicePlayer.play();
	});


	voicePlayer.empty();

	$('#voicePlayer .voicePlayerControls .btn-playpause').click(function(){
		voicePlayer.playPause();
	});

	$('#voicePlayer .voicePlayerControls .btn-toggle-mute').click(function(){
		voicePlayer.toggleMute();
		$(this).data('muted', !($(this).data('muted')));
		if($(this).data('muted'))
			$(this).removeClass('btn-unmute').addClass('btn-mute');
		else
			$(this).removeClass('btn-mute').addClass('btn-unmute');
	});

	$('#voicePlayer .voicePlayerControls .btn-close').click(function(){
		if($(this).data('target') && $(this).data('target')=='window')
		{
			window.close();
		}else if($(this).data('target') && $(this).data('target')=='blockui')
		{
			voicePlayer.destroy();
			if(typeof voicePlayerTimer !='undefined')
				clearInterval(voicePlayerTimer);
			$.unblockUI();
		}else{
			voicePlayer.empty();
			$('#voicePlayer').slideUp();
		}
	});
}