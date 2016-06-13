function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function randomLetter() {
	return String.fromCharCode(rand(65, 91));
}

function createName() {
	return randomLetter() + randomLetter() + rand(100, 900);
}

function Robot() {
	this.name = createName();
}
Robot.prototype.reset = function() {
	this.name = createName();
};

module.exports = Robot;