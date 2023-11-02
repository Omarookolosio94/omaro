export const formatDateToYMD = (date) => date.split('-').reverse().join('-');

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const formatDateToDMY = (date) => date.split('-').reverse().join('-');

export const getCurrentDate = () => {
  var dt = new Date();

  return dt.getDate() + ' ' + months[dt.getMonth()] + ' ' + dt.getFullYear();
};