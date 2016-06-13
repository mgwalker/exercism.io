module.exports = function(input) {
	var output = Object.create(null);
	
	Object.keys(input).forEach(function(key) {
		input[key].forEach(function(letter) {
			output[letter.toLowerCase()] = +key;
		});
	});
	
	return output;
}