'use strict';

function timeConversion(s) {
  let time = s.slice(-2);
  let hour = Number(s.slice(0, 2));
  let i = 0;
  let hourStr = '';

  if (time === 'PM' && hour !== 12) {
    i = 2;
    hourStr = (hour + 12).toString();
  }
  if (time === 'AM' && hour === 12) {
    i = 2;
    hourStr = '00';
  }
  return hourStr + s.slice(i, 8);
}

module.exports = timeConversion;
