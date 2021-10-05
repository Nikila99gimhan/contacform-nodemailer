const months = ["January", "February", "March", "April", "May", "June", "July","August","September","October"];
const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);

const random = Math.floor(Math.random() * week.length);
console.log(random, week[random]);