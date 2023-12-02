const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const formattedDateServer = function (d = new Date()) {
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return `${year}-${month}-${day}`;
};

export const formattedDate3 = function (d = new Date()) {
  let month = String(d.getMonth());
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return `${day} ${months[d.getMonth()]} ${year}`;
};

export const formatDate = inputDate => {
  // Parse the input date string into a Date object
  const date = new Date(inputDate);

  // Define month names
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Extract day, month, and year components from the date
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Format the date in the desired format
  const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

  return formattedDate;
};
