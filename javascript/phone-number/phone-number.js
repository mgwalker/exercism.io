module.exports = function(demDigits) {
	
	demDigits = demDigits.replace(/[^0-9]+/g, "");
	if(demDigits.length !== 10) {
		if(demDigits.length === 11 && demDigits[0] === "1") {
			demDigits = demDigits.substr(1);
		} else {
			demDigits = "0000000000";
		}
	}
	
	function areaCode() {
		return demDigits.substr(0, 3);
	}
	
	return {
		number: function() {
			return demDigits;
		},
		areaCode: areaCode,
		toString: function() {
			return "(" + areaCode() + ") " + demDigits.substr(3, 3) + "-" + demDigits.substr(6);
		}
	}
};