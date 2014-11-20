$(function() {

  var video = document.getElementById('tron'),
      playButton = $('#video_button'),
      playing = false

  playButton.on('click', function(event) {
    event.preventDefault();

    if (playing) {
      video.pause();
      playing = false;
      playButton.text('Play');
    } else {
      video.play();
      playing = true;
      playButton.text('Pause');
    }
  });

  $('#video_volume_up').on('click', function(event) {
    video.volume += 0.1;
  });

  $('#video_volume_down').on('click', function(event) {
    video.volume -= 0.1;
  });

});
