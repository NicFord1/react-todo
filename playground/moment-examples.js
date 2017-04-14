import moment from 'moment';

console.log(moment().format());

// Unix Timestamp -- January 1st 1970 @ 12:00am -> 0
//                -- January 1st 1970 @ 12:01am -> 60
//                -- December 31 1969 @ 11:59pm -> -60
var now = moment();
console.log('Current Timestamp: ', now.unix());

var timestamp = 1491871072;
var currentMoment = moment.unix(timestamp);
console.log('Current moment: ', currentMoment.format('MMM D, YYYY @ HH:mm:ss'));

// Challenge -- January 3rd, 2017 @ 12:13 AM
console.log('Current moment challenge: ', currentMoment.format('MMMM Do, Y @ hh:mm A'));
