const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currDateFunc = (date) => {
  date.setDate(1);
  const firstDay = date.getDay();
  const currMonth = date.getMonth()
  const monthName =months[currMonth] ;
  const currYear = date.getFullYear()
  date.setMonth(currMonth + 1);
  date.setDate(0);
  const EndDate = date.getDate();
  const EndDay = date.getDay();
  date = new Date();

  return { currYear, EndDay, firstDay, EndDate,monthName,currMonth};
};

export { currDateFunc };
