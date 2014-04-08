time-resolutions
================

![Build status](https://api.travis-ci.org/binocarlos/timestamp-resolutions.png)

A collection of time resolutions in milliseconds

## installation

```
$ npm install time-resolutions
```

## usage


```js
var resolutions = require('time-resolutions');

// 150 milliseconds
var ms = 150;

var m = resolutions.resolve(ms); // millisecond

// 3.5 seconds
var secs = 3500;

var s = resolutions.resolve(secs); // second

// 2.5 weeks
var weeks = 2.5 * 1000 * 60 * 60 * 24 * 7;

var w = resolutions.resolve(weeks); // week

// how many milliseconds are in 3 weeks?
var ms = 3 * resolutions.week;
```

### var resolutions.resolve(ms)

Return a string that represents the resolution of the millisecond gap you provide.

### var ms = resolutions.ms('week')

Get how many milliseconds there are in a:

 * second
 * minute
 * hour
 * day
 * week
 * month
 * year

```js
var resolutions = require('time-resolutions');

var ms_in_a_week = resolutions.ms('week');
```

## license

MIT