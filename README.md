# node-time-ago [![Build Status](https://img.shields.io/travis/thatisuday/node-time-ago.svg?style=flat-square)](https://travis-ci.org/thatisuday/node-time-ago) [![npm downloads](https://img.shields.io/npm/dt/node-time-ago.svg?style=flat-square)](https://www.npmjs.com/package/node-time-ago) [![npm version](https://img.shields.io/npm/v/node-time-ago.svg?style=flat-square)](https://www.npmjs.com/package/node-time-ago) [![npm dependencies](https://img.shields.io/david/thatisuday/node-time-ago.svg?style=flat-square)](https://www.npmjs.com/package/node-time-ago)


Simple time ago function for node.js **that actually works**!

***

```
npm install --save node-time-ago
```

Use `timestamp`, `Date Instance`, `iso8601 date` or `any valid parsable date string` as input.

```
var timeAgo = require('node-time-ago');

timeAgo(new Date()); // just now
timeAgo(Date().now()); // just now
timeAgo(new Date().toISOString()); // just now

timeAgo(Date.now() + 35 * 1000); // "35 second ago",
timeAgo(Date.now() + 65 * 1000); // "a minute ago",
timeAgo(Date.now() + 3 * 60 * 1000); // "3 minutes ago",
timeAgo(Date.now() + 65 * 60 * 1000); // "an hour ago",
timeAgo(Date.now() + 3 * 60 * 60 * 1000); // "3 hours ago",
timeAgo(Date.now() + 25 * 60 * 60 * 1000); // "a day ago",
timeAgo(Date.now() + 3 * 24 * 60 * 60 * 1000); // "3 days ago",
timeAgo(Date.now() + 35 * 24 * 60 * 60 * 1000); // "a month ago",
timeAgo(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000); // "3 months ago",
timeAgo(Date.now() + 13 * 30 * 24 * 60 * 60 * 1000); // "a year ago",
timeAgo(Date.now() + 3 * 12 * 30 * 24 * 60 * 60 * 1000); // "3 years ago"
```
