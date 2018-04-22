var moment = require('moment');

var date = moment();

console.log(date.format('MMM Do YYYY hh:mm:ss A'));

// 10:35 am
console.log(date.format('hh:mm a'));

// 6:01am
console.log(date.format('h:mm a'));