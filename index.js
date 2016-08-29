// Load dependencies
const
	_ 		= 	require('lodash')
;

/***************************************************/

var settings = {
	now				: 	"just now",
	seconds			: 	"%d second ago",
	minute 			: 	"a minute ago",
	minutes			: 	"%d minutes ago",
	hour 			: 	"an hour ago",
	hours			: 	"%d hours ago",
	day 			: 	"a day ago",
	days 			: 	"%d days ago",
	month 			: 	"a month ago",
	months 			: 	"%d months ago",
	year 			: 	"a year ago",
	years 			: 	"%d years ago"
};

/***************************************************/

var inWords = function(inpDate){
	
	// Get time distance from now (in milliseconds)
	var timeDist 	= 	new Date().getTime() - inpDate.getTime();


	// Get time components
	var seconds 	= 	Math.abs(timeDist) 	/ 	1000;
	var minutes 	= 	seconds 			/ 	60;
	var hours 		= 	minutes 			/ 	60;
	var days 		= 	hours 				/ 	24;
	var years 		= 	days 				/ 	365;


	// Get string from number
	function getStrFromNum(string, number){
		return string.replace(/%d/i, number);
	}


	// return words
	var words = 
		seconds 	< 	30 		&& 	getStrFromNum(settings.now, 	0					) 	||
		seconds 	< 	60 		&& 	getStrFromNum(settings.seconds, Math.round(seconds)	) 	||
		seconds 	< 	120 	&& 	getStrFromNum(settings.minute, 	1					) 	||
		minutes 	< 	60 		&& 	getStrFromNum(settings.minutes, Math.round(minutes)	) 	||
		minutes 	< 	120 	&& 	getStrFromNum(settings.hour, 	1					) 	||
		hours 		< 	24 		&& 	getStrFromNum(settings.hours, 	Math.round(hours)	) 	||
		hours 		< 	48 		&& 	getStrFromNum(settings.day, 	1					) 	||
		days 		< 	30 		&& 	getStrFromNum(settings.days, 	Math.round(days)	) 	||
		days 		< 	60 		&& 	getStrFromNum(settings.month, 	1					) 	||
		days 		< 	365 	&& 	getStrFromNum(settings.months, 	Math.round(days/30)	) 	||
		years 		< 	1.5 	&& 	getStrFromNum(settings.year, 	1					) 	||
									getStrFromNum(settings.years, 	Math.round(years)	)
	;

	return words;
};


/***************************************************/


var getAgoString = function(input){
	if(input instanceof Date){
		return inWords(input);
	}
	else if(typeof input === "number"){
		return inWords(new Date(input));
	}
	else if(typeof input === "string" && new Date(input).toString() != 'Invalid Date'){
		return inWords(new Date(input));
	}
	else{
		return input; // could not convert
	}
};

/***************************************************/

module.exports = exports = getAgoString;
