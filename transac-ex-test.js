const omit = require("lodash.omit");
const pick = require("lodash.pick");
const map = require("lodash.map");
const partialRight = require("lodash.partialright");

const ws = {
  e: "24hrTicker",
  E: 1584785872047,
  s: "ETHUSDT",
  p: "-19.66000000",
  P: "-13.313",
  w: "135.34265376",
  x: "147.67000000",
  c: "128.01000000",
  Q: "0.61745000",
  b: "128.00000000",
  B: "20.89010000",
  a: "128.04000000",
  A: "10.00000000",
  o: "147.67000000",
  h: "152.55000000",
  l: "116.74000000",
  v: "2288718.42508000",
  q: "309761225.35268660",
  O: 1584699472046,
  C: 1584785872046,
  F: 132391373,
  L: 133070826,
  n: 679454
};

let modified = pick(ws, ["s", "c", "h", "l", "v", "n"]);
console.log([modified]);
