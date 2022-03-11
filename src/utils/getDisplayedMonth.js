import moment from 'moment';
import { getWeekStartDate } from './dateUtils.js';

const getFromatedDate = (date, value) => {
  return moment(date).format(value)
}

export const getDisplayedMonth = (date) => {
  const weekStart = getWeekStartDate(date);
  const weekEnd = moment(date).add(6, 'days').toDate();
  const startMonth = getFromatedDate(weekStart, 'MM');
  const startMonthName = moment(weekStart).format('MMM')
  const endMonth = getFromatedDate(weekEnd, 'MM');
  const endtMonthName = moment(weekEnd).format('MMM');
  const startYear = getFromatedDate(weekStart, 'YYYY');
  const endYear = getFromatedDate(weekEnd, 'YYYY');

  const isSameMonth = startMonth === endMonth;
  if (isSameMonth) {
    return `${startMonthName} ${startYear}`;
  }
  const isSameYear = startYear === endYear;
  return isSameYear
    ? `${startMonthName} - ${endtMonthName} ${startYear}`
    : `${startMonthName} ${startYear} - ${endtMonthName} ${endYear}`;
};
