import Foundation

class Year {
	let _isLeapYear : Bool;
	
	init(calendarYear:Int) {
		_isLeapYear = ((calendarYear % 400) == 0) || ((calendarYear % 4) == 0 && (calendarYear % 100) != 0);
	}
	
	var isLeapYear : Bool {
		get {
			return _isLeapYear;
		}
	}
}