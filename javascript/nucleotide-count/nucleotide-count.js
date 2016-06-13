module.exports = function(strand) {
	if(!strand) strand = "";
	if(!/^[ATCG]*$/.test(strand)) {
		throw new Error("Invalid DNA strand");
	}
	
	var histogram = { A: 0, C: 0, G: 0, T: 0 };
	for(var i = 0; i < strand.length; i++) {
		histogram[strand[i]]++;
	}
	
	return {
		count: function(symbol) {
			return histogram[symbol];
		},
		histogram: function() {
			return histogram;
		}
	};
};