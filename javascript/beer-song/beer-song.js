function s(count) {
	return (count === 1 ? "" : "s");
}

function getVerse(bottles) {
	if(bottles === 0) {
		return (
			"No more bottles of beer on the wall, no more bottles of beer.\n" +
			"Go to the store and buy some more, 99 bottles of beer on the wall.\n");
	} else {
		var snippet = bottles + " bottle" + s(bottles) + " of beer on the wall, ";
		snippet += bottles + " bottle" + s(bottles--) + " of beer.\n";
		snippet += "Take " + (bottles === 0 ? "it": "one") + " down and pass it around, ";
		if(bottles === 0) bottles = "no more";
		snippet += bottles + " bottle" + s(bottles) + " of beer on the wall.\n";
		return snippet;
	}
}

module.exports = {
	verse: getVerse,
	sing: function(verse, end) {
		if(!end) end = 0;

		var song = "";
		while(verse >= end) {
			song += getVerse(verse) + (verse === end ? "" : "\n");
			verse--;
		}
		return song;
	}
};
