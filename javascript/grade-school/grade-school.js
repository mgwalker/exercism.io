module.exports = function() {
	
	var _roster = { };
	
	return {
		roster: function() {
			return _roster;
		},
		add: function(name, grade) {
			if(!_roster[grade]) {
				_roster[grade] = [ ];
			}
			_roster[grade].push(name);
			_roster[grade].sort();
		},
		grade: function(grade) {
			return (_roster[grade] || [ ]);
		}
	};
};