var conversionMap = { A: "U", C: "G", G: "C", T: "A" };

module.exports = function(strand) {
	return strand.split("").map(function(dna) {
		return conversionMap[dna];
	}).join("");
};