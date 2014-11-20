window.onload = function() {

  var button = document.getElementById("submit");
  var first = document.getElementById("first");
  var second = document.getElementById("second");
  var comparison = document.getElementById("comparison");
  var operator = "";

  button.onclick = function() {

    if (first.value > second.value) {
      operator = ">";
    } else if (first.value < second.value) {
      operator = "<";
    } else if (first.value == second.value) {
      operator = "==";
    }

    comparison.innerHTML = operator;

  }

}
