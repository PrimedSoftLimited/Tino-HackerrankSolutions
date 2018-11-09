abigsum = [2000, 1000, 3000, 1000, 1000, 2000];
console.log(abigsum.length);
var reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(abigsum.reduce(reducer));