import moment from 'moment';
import { getWeekStartDate } from './dateUtils.js';

export const getDisplayedMonth = (date) => {
  const weekStart = getWeekStartDate(date);
  const weekEnd = moment(date).add(6, 'days').toDate();
  const startMonth = moment(weekStart).format('MM');
  const startMonthName = moment(weekStart).format('MMM')
  const endMonth = moment(weekEnd).format('MM');
  const endtMonthName = moment(weekEnd).format('MMM');
  const startYear = moment(weekStart).format('YYYY');
  const endYear = moment(weekEnd).format('YYYY');

  const isSameMonth = startMonth === endMonth;
  if (isSameMonth) {
    return `${startMonthName} ${startYear}`;
  }
  const isSameYear = startYear === endYear;
  return isSameYear
    ? `${startMonthName} - ${endtMonthName} ${startYear}`
    : `${startMonthName} ${startYear} - ${endtMonthName} ${endYear}`;
};
