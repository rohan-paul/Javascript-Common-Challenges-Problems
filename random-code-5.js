// const moment = require("moment");

// const options = [
//   { symbol: "A", name: "Agilent Technologies Inc." },
//   { symbol: "AA", name: "Alcoa Corporation" }
// ].map(item => ({
//   value: item.symbol,
//   label: `${item.symbol} ${item.name}`
// }));
//
const options = [["2018-02-23", 183.29], ["2018-02-22", 178.99]];

console.log(options);

const x = options.map(i => i[0]);
const y = options.map(i => i[1]);

console.log(x);
console.log(y);

// console.log(getYAxis(options));

/*const returnLabel = stockSymbol => {
  return options.filter(i => {
    return i.value === stockSymbol;
  })[0].label;
  // return result
};

// const tickerSelectedByUser = options.filter(i => {
//   return i.value === "AA";
// })[0].label;

console.log(returnLabel("AA"));*/
