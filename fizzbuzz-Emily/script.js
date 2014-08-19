window.onload = function() {

var numValue = parseInt(prompt("Let's play FizzBuzz. \nEnter a number between 1 and 100"));

var getNum = function(numValue) {

	numValue = parseInt(prompt("please enter a whole number between 1 and 100"));

	// numValue = parseInt(numValue);	

		if (isNaN(numValue)) {
			getNum();
		} else {
			fizzBuzz(numValue);
		};

}; //getNum end

var fizzBuzz = function(num) {
	alert("hi");
			for (var i = 1; i < numValue + 1; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				document.getElementById('container').innerHTML = ("fizzbuzz")
			} 
			else if (i % 3 === 0) {
				document.getElementById('container').innerHTML = ("fizz")
				} 

			else if (i % 5 === 0) {
					document.getElementById('container').innerHTML = ("buzz")
				} else {
					document.getElementById('container').innerHTML = (i)
				};
			}; //for loop end
}; //fizzBuzz end

fizzBuzz();


}; //onload end
