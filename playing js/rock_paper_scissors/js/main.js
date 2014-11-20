
function getRandomChoice () {
  var random = Math.random();
  var threeChoice = Math.floor(random * 3);
  var randomChoice = "";

  if (threeChoice == 0) { randomChoice = "rock"};

  if (threeChoice == 1) { randomChoice = "paper"};

  if (threeChoice == 2) { randomChoice = "scissors"};

  return randomChoice;
}


function compare(userChoice, computerChoice) {

  if (userChoice === computerChoice) {return 0;}
  else if (userChoice === 'rock' && computerChoice === 'scissors')
          {return 1;}

  else if (userChoice === 'rock' && computerChoice === 'paper')
          {return 2;}

  else if (userChoice === 'paper' && computerChoice === 'rock')
          {return 1;}

  else if (userChoice === 'paper' && computerChoice === 'scissors')
          {return 2;}

  else if (userChoice === 'scissors' && computerChoice === 'rock')
          {return 2;}

  else if (userChoice === 'scissors' && computerChoice === 'paper')
          {return 1;}
};

$('button').on('click', function() {
  var x = getRandomChoice()
  var y = $(this).attr('id');

  var compareResult = compare(y, x);

  switch (compareResult)
  {
  case 0:
    $('#status').html('You: ' + y + ' - Computer: ' + x + ' ... DRAW!');
    break;/*to prevent the code from running into the next case
    automatically*/
  case 1:
    $('#status').html('You: ' + y + ' - Computer: ' + x + ' ... YOU WIN!');
    $("#humanScore").text(parseInt($("#humanScore").text()) + 1);
    break;
  case 2:
    $('#status').html('You: ' + y + ' - Computer: ' + x + ' ... COMPUTER WIN!');
    $("#computerScore").text(parseInt($("#computerScore").text()) + 1);
    break;
  }
  console.log(compareResult);

});
