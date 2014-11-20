(function() {
  var ScreamingButton;

  ScreamingButton = (function() {
    function ScreamingButton(button) {
      var _this = this;
      this.button = button;
      this.button.on('click', function() {
        return _this.scream();
      });
    }

    ScreamingButton.prototype.scream = function() {
      return this.button.append(" Aaaaah!");
    };

    return ScreamingButton;

  })();

  $(function() {
    var primary;
    primary = $('.primary-cta');
    return new ScreamingButton(primary);
  });

}).call(this);
