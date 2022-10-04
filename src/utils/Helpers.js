export const formatDateToYMD = (date) => date.split('-').reverse().join('-');

export const formatDateToDMY = (date) => date.split('-').reverse().join('-');

export const getCurrentDate = () => {
  var dt = new Date();

  return dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear();
};
