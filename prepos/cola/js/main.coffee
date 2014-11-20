class ScreamingButton
  constructor: (@button) ->

    @button.on 'click', =>
      this.scream()

  scream: ->
    @button.append(" Aaaaah!")

$ ->
  primary = $('.primary-cta')
  new ScreamingButton(primary)
