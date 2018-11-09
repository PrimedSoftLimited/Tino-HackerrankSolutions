var sas = [10, 21, 34, 25, 10];
console.log(sas.length);
var reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(sas.reduce(reducer));