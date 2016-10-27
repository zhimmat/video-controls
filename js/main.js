var $videoWrap = $('#video-wrap');
var $video = $('#the-video');
var $btn = $('#btn-play-pause');

$btn.on('click', function () {
  if ($video.get(0).paused){
    $video.get(0).play();
    $btn.html('Pause');
    $videoWrap.attr('data-state', 'playing');
  } else {
    $video.get(0).pause();
    $btn.html('Play');
    $videoWrap.attr('data-state', 'paused');
  }
});
