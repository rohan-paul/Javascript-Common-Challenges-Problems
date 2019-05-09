const data = {
	name: "AAPL",
	history: {
		"2019-05-03": {
			open: "210.89",
			close: "211.75",
			high: "211.84",
			low: "210.23",
			volume: "20892378"
		},
		"2019-05-02": {
			open: "209.84",
			close: "209.15",
			high: "212.65",
			low: "208.13",
			volume: "31996324"
		},
		"2019-05-01": {
			open: "209.88",
			close: "210.52",
			high: "215.31",
			low: "209.23",
			volume: "64827328"
		}
	}
};
const getDateAndClosingPrice = obj => {
	let date = [];
	let closingPrice = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			date.push(key);
			closingPrice.push(obj[key].close);
		}
	}
	return [date, closingPrice];
};

console.log(getDateAndClosingPrice(data.history)[1]);
