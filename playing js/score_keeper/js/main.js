window.onload = function() {

  var total = 0;
  var visibleScore = document.getElementById("score");
  var reset = document.getElementById("reset");
  var plus5 = document.getElementById("plus_5");
  var plus10 = document.getElementById("plus_10");
  var subtract1 = document.getElementById("subtract_1");

  reset.onclick = function() {
    total = 0;
    visibleScore.innerHTML = total;
  }

  plus5.onclick = function() {
    total += 5;
    visibleScore.innerHTML = total;
  }

  plus10.onclick = function() {
    total += 10;
    visibleScore.innerHTML = total;
  }

  subtract1.onclick = function() {
    total -= 1;
    visibleScore.innerHTML = total;
  }

}
