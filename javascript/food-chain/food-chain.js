var theSong = [
	{
		chain: "",
		intro: ""
	},
	{
		intro: "I know an old lady who swallowed a fly.",
		chain: "I don't know why she swallowed the fly. Perhaps she'll die."
	},
	{
		intro: "I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.",
		chain: "She swallowed the spider to catch the fly."
	},
	{
		intro: "I know an old lady who swallowed a bird.\nHow absurd to swallow a bird!",
		chain: "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her."
	},
	{
		intro: "I know an old lady who swallowed a cat.\nImagine that, to swallow a cat!",
		chain: "She swallowed the cat to catch the bird."
	},
	{
		intro: "I know an old lady who swallowed a dog.\nWhat a hog, to swallow a dog!",
		chain: "She swallowed the dog to catch the cat."
	},
	{
		intro: "I know an old lady who swallowed a goat.\nJust opened her throat and swallowed a goat!",
		chain: "She swallowed the goat to catch the dog."
	},
	{
		intro: "I know an old lady who swallowed a cow.\nI don't know how she swallowed a cow!",
		chain: "She swallowed the cow to catch the goat."
	},
	{
		intro: "I know an old lady who swallowed a horse.\nShe's dead, of course!",
		chain: ""
	}
];

function getVerse(verse) {
	var song = theSong[verse].intro + "\n";
	while(verse > 0 && theSong[verse].chain) {
		song += theSong[verse--].chain + "\n";
	}
	return song;
}

module.exports = {
	verse: getVerse,
	verses: function(verse, end) {
		var song = "";
		while(verse <= end) {
			song += getVerse(verse++) + "\n";
		}
		return song;
	}
};