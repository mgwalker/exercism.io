module.exports = function(str) {
	if(!str) str = "";

	var count = Object.create(null);
	
	var regex = /\S+/gm;
	var words;

	while((words = regex.exec(str)) !== null) {
		if(!count[words[0]]) {
			count[words[0]] = 0;
		}
		count[words[0]]++;
	}
	
	return count;
};