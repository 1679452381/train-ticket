const now = new Date();
console.log(now);
now.setHours(0);
now.setMinutes(0);
now.setSeconds(0);
now.setMonth(4);
// now.setMilliseconds(0);
now.setDate(1);
const monthSequence = [now.getTime()];

now.setMonth(now.getMonth() + 1);
monthSequence.push(now.getTime());

now.setMonth(now.getMonth() + 1);
monthSequence.push(now.getTime());

console.log(monthSequence);
console.log(monthSequence.getDay());