'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const oldDate = date.split(fromFormat[3]);
  const newDate = [];

  for (let i = 0; i < toFormat.length - 1; i++) {
    for (let n = 0; n < fromFormat.length - 1; n++) {
      if (fromFormat[n] === 'YYYY' && toFormat[i] === 'YY') {
        const shortYearDate = oldDate[n].toString().slice(2);

        newDate[i] = +shortYearDate;
      }

      if (fromFormat[n] === 'YY' && toFormat[i] === 'YYYY') {
        let longYearDate = '';

        if (oldDate[n] < 30) {
          longYearDate = '20' + oldDate[n].toString();
        } else {
          longYearDate = '19' + oldDate[n].toString();
        }

        newDate[i] = +longYearDate;
      }

      if (toFormat[i] === fromFormat[n]) {
        newDate[i] = oldDate[n];
      }
    }
  }

  return newDate.join(toFormat[3]);
}

module.exports = formatDate;
