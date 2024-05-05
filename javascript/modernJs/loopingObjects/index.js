const week = ["Mon", "Tue", "Wed", "Thi", "Fri", "Sat", "Sun"];
const openingHours = {
  fri: {
    open: 12,
    close: 22,
  },
  sat: {
    open: 11,
    close: 23,
  },
  sun: {
    open: 18,
    close: 24,
  },
};

// object keys
const days = Object.keys(openingHours);
// console.log(days);
let message = `We are open ${days.length} days a week, on:`;
for (const day of days) {
  message += ` ${day},`
}
// console.log(message);

// object value
const opening = Object.values(openingHours);
// console.log(opening);
for (const {open, close} of opening) {
  // console.log(open , close);
}

// object entries
const weekOpening = Object.entries(openingHours);
// console.log(weekOpening);
for (const [day,{ open, close }] of weekOpening) {
  // console.log(`On ${day}, we open at ${open}, and close at ${close}`);
}
