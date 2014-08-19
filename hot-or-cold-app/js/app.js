$(document).ready(function(){


	var answerNumber = function() {
			computerNumber = Math.floor(Math.random() * 101);
				console.log(computerNumber);
				return computerNumber;
	};

	answerNumber();


	function gamePlay() { 

	var guessNumber = $("#userGuess").val();
		console.log(guessNumber);	

	computerNumber;

	var guessChecker = (Math.abs(guessNumber - computerNumber));
		console.log(guessChecker);


	if(guessChecker === 0) {
		$("#feedback").replaceWith("<h2 id='feedback'>" + "You got it right - press the New Game button to start again!" + "</h2>");
	}

	else if(guessChecker >= 30 && guessChecker <=49) {
		$("#feedback").replaceWith("<h2 id='feedback'>" + "You're cold!" + "</h2>");
	}

	else if(guessChecker >= 20 && guessChecker <=29) {
		$("#feedback").replaceWith("<h2 id='feedback'>" + "You're warm!" + "</h2>");
	}

	else if(guessChecker >= 10 && guessChecker <=19) {
		$("#feedback").replaceWith("<h2 id='feedback'>" + "You're hot!" + "</h2>");
	}

	else if(guessChecker >= 1 && guessChecker <=9) {
		$("#feedback").replaceWith("<h2 id='feedback'>" + "You're burning up!" + "</h2>");
	}

	else {
		$("#feedback").replaceWith("<h2 id='feedback'>" + "You're freezing!" + "</h2>");
	}

};

	$("#guessButton").on("click", function(){
		event.preventDefault();
		alert("here");
		
		/* add validating of guessNumber */

			var guessNumber = $("#userGuess").val();
			$("#guessList").append("<li>" + guessNumber + "</li>")
			gamePlay();
			$("#userGuess").val(" ");
		
		
	}); 


	/*--- Display information modal box ---*/

  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});