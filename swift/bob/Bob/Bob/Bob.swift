import Foundation

class Bob {
	static func hey(text:String) -> NSString {
		if(text.uppercaseString == text && text.rangeOfString("[A-Z]", options: .RegularExpressionSearch) != nil) {
			return "Woah, chill out!";
		} else if(count(text.stringByTrimmingCharactersInSet(NSCharacterSet.whitespaceAndNewlineCharacterSet())) == 0) {
			return "Fine, be that way.";
		} else if(text.hasSuffix("?")) {
			return "Sure.";
		} else {
			return "Whatever.";
		}
	}
}