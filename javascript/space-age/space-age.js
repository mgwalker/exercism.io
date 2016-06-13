module.exports = function(seconds) {
	function toYears(secondsPerYear) {
		return function() {
			return Math.round(seconds * 100 / secondsPerYear) / 100;
		};
	};
	
	return {
		seconds: seconds,
		onMercury: toYears(7600543.8199),
		onVenus: toYears(19414149.052),
		onEarth: toYears(31557600),
		onMars: toYears(59354032.69),
		onJupiter: toYears(374355659.12),
		onSaturn: toYears(929292362.88),
		onUranus: toYears(2651370019.3),
		onNeptune: toYears(5200418560)
	};
};