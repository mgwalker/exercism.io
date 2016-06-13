function getLetters(word) {
	// Since anagram matching will be case-insensitive,
	// just uppercase everything right from the start.
	word = word.toUpperCase();
	var letters = Object.create(null);
	
	// Check each letter, add it to the letter map if
	// it doesn't exist, then increment the letter map.
	for(var i = 0; i < word.length; i++) {
		if(!letters[word[i]]) {
			letters[word[i]] = 0;
		}
		letters[word[i]]++;
	}
	return letters;
}

function setsMatch(set1, set2) {
	// Given two "sets" (e.g., simple objects), check
	// each property of the first and ensure that the
	// corresponding property of the set is the same.
	return Object.keys(set1).every(function(letter) {
		return set1[letter] === set2[letter];
	});
}

module.exports = function anagram(source) {
	
	// Cache off the letter map of the source text.
	var sourceLetters = getLetters(source);

	return {
		matches: function(words) {
			// If the first argument isn't an array,
			// build up an array from the arguments
			// object.
			if(!Array.isArray(words)) {
				words = [ arguments[0] ];
				for(var i = 1; i < arguments.length; i++) {
					words.push(arguments[i]);
				}
			}
			
			var matches = [ ];
			
			// Check each word to see if its length
			// equals the length of the source text
			// and its letter map matches the letter
			// map of the source.  If it does, add
			// it to the list of matching words.
			words.forEach(function(word) {
				if(word.length === source.length && word.toUpperCase() !== source.toUpperCase()) {
					if(setsMatch(sourceLetters, getLetters(word))) {
						matches.push(word);
					}
				}
			});
			
			return matches;
		}
	};
};