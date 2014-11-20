window.onload = function() {

  var body = document.getElementById('background');
  var greyButton = document.getElementById('grey');
  var blueButton = document.getElementById('blue');
  var yellowButton = document.getElementById('yellow');

  greyButton.onclick = function() {
   colorSwitch('grey', 'white')
  }

  blueButton.onclick = function() {
    colorSwitch('blue', 'white')
  }

  yellowButton.onclick = function() {
colorSwitch('yellow', 'white')
  }
function colorSwitch(bgColor, textColor) {
  body.style.backgroundColor = bgColor;
  body.style.color = textColor;
}

}
