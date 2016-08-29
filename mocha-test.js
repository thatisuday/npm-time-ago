// Load chai expect
const expect 	= 	require('chai').expect;
const timeAgo 	= 	require('./index');

// test results to expect
var results = {
	now				: 	"just now",
	seconds			: 	"35 second ago",
	minute 			: 	"a minute ago",
	minutes			: 	"3 minutes ago",
	hour 			: 	"an hour ago",
	hours			: 	"3 hours ago",
	day 			: 	"a day ago",
	days 			: 	"3 days ago",
	month 			: 	"a month ago",
	months 			: 	"3 months ago",
	year 			: 	"a year ago",
	years 			: 	"3 years ago"
};

/**********************************************************/

describe('fromDate', function(){
	it('should return just now', function(){
		expect(timeAgo(new Date())).to.equal(results.now);
	});
	it('should return 35 seconds ago', function(){
		expect(timeAgo(new Date(Date.now() + 35 * 1000))).to.equal(results.seconds);
	});
	it('should return a minute ago', function(){
		expect(timeAgo(new Date(Date.now() + 65 * 1000))).to.equal(results.minute);
	});
	it('should return 3 minutes ago', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 60 * 1000))).to.equal(results.minutes);
	});
	it('should return an hour ago', function(){
		expect(timeAgo(new Date(Date.now() + 65 * 60 * 1000))).to.equal(results.hour);
	});
	it('should return 3 hours ago', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 60 * 60 * 1000))).to.equal(results.hours);
	});
	it('should return a day ago', function(){
		expect(timeAgo(new Date(Date.now() + 25 * 60 * 60 * 1000))).to.equal(results.day);
	});
	it('should return 3 days ago', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000))).to.equal(results.days);
	});
	it('should return a month ago', function(){
		expect(timeAgo(new Date(Date.now() + 35 * 24 * 60 * 60 * 1000))).to.equal(results.month);
	});
	it('should return 3 months ago', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000))).to.equal(results.months);
	});
	it('should return a year ago', function(){
		expect(timeAgo(new Date(Date.now() + 13 * 30 * 24 * 60 * 60 * 1000))).to.equal(results.year);
	});
	it('should return 3 years ago', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 12 * 30 * 24 * 60 * 60 * 1000))).to.equal(results.years);
	});
});

describe('fromNumber', function(){
	it('should return just now', function(){
		expect(timeAgo(Date.now())).to.equal(results.now);
	});
	it('should return 35 seconds ago', function(){
		expect(timeAgo(Date.now() + 35 * 1000)).to.equal(results.seconds);
	});
	it('should return a minute ago', function(){
		expect(timeAgo(Date.now() + 65 * 1000)).to.equal(results.minute);
	});
	it('should return 3 minutes ago', function(){
		expect(timeAgo(Date.now() + 3 * 60 * 1000)).to.equal(results.minutes);
	});
	it('should return an hour ago', function(){
		expect(timeAgo(Date.now() + 65 * 60 * 1000)).to.equal(results.hour);
	});
	it('should return 3 hours ago', function(){
		expect(timeAgo(Date.now() + 3 * 60 * 60 * 1000)).to.equal(results.hours);
	});
	it('should return a day ago', function(){
		expect(timeAgo(Date.now() + 25 * 60 * 60 * 1000)).to.equal(results.day);
	});
	it('should return 3 days ago', function(){
		expect(timeAgo(Date.now() + 3 * 24 * 60 * 60 * 1000)).to.equal(results.days);
	});
	it('should return a month ago', function(){
		expect(timeAgo(Date.now() + 35 * 24 * 60 * 60 * 1000)).to.equal(results.month);
	});
	it('should return 3 months ago', function(){
		expect(timeAgo(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000)).to.equal(results.months);
	});
	it('should return a year ago', function(){
		expect(timeAgo(Date.now() + 13 * 30 * 24 * 60 * 60 * 1000)).to.equal(results.year);
	});
	it('should return 3 years ago', function(){
		expect(timeAgo(Date.now() + 3 * 12 * 30 * 24 * 60 * 60 * 1000)).to.equal(results.years);
	});
});

describe('fromString', function(){
	it('should return just now', function(){
		expect(timeAgo(new Date().toISOString())).to.equal(results.now);
	});
	it('should return 35 seconds ago', function(){
		expect(timeAgo(new Date(Date.now() + 35 * 1000).toISOString())).to.equal(results.seconds);
	});
	it('should return a minute ago', function(){
		expect(timeAgo(new Date(Date.now() + 65 * 1000).toISOString())).to.equal(results.minute);
	});
	it('should return 3 minutes ago', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 60 * 1000).toISOString())).to.equal(results.minutes);
	});
	it('should return an hour ago', function(){
		expect(timeAgo(new Date(Date.now() + 65 * 60 * 1000).toISOString())).to.equal(results.hour);
	});
	it('should return 3 hours ago', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString())).to.equal(results.hours);
	});
	it('should return a day ago', function(){
		expect(timeAgo(new Date(Date.now() + 25 * 60 * 60 * 1000).toISOString())).to.equal(results.day);
	});
	it('should return 3 days ago', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString())).to.equal(results.days);
	});
	it('should return a month ago', function(){
		expect(timeAgo(new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString())).to.equal(results.month);
	});
	it('should return 3 months ago', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000).toISOString())).to.equal(results.months);
	});
	it('should return a year ago', function(){
		expect(timeAgo(new Date(Date.now() + 13 * 30 * 24 * 60 * 60 * 1000).toISOString())).to.equal(results.year);
	});
	it('should return 3 years ago', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 12 * 30 * 24 * 60 * 60 * 1000).toISOString())).to.equal(results.years);
	});
});