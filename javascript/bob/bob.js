//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
	if(!input) {
		input = "";
	}
	
	if(/[A-Z]+/.test(input) && input.toUpperCase() === input) {
		return "Whoa, chill out!";
	} else if(input[input.length - 1] === "?") {
		return "Sure.";
	} else if(/^\s*$/.test(input)) {
		return "Fine. Be that way!"
	} else {
		return "Whatever.";
	}
};

module.exports = Bob;
