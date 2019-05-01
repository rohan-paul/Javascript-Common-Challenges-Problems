const data = [
	{
		by: "tambre",
		descendants: 0,
		id: 19769871,
		score: 1,
		time: 1556436737,
		title: "Reverse Engineering a North Korean Sim City Game",
		type: "story",
		url:
			"https://digitalnk.com/blog/2019/04/21/reverse-engineering-a-north-korean-sim-city-game/",
		storyRank: 1
	},
	{
		by: "rumcajz",
		descendants: 0,
		id: 19769870,
		score: 1,
		time: 1556436731,
		title:
			"Hull: An alternative to shell that I'll never have time to implement",
		type: "story",
		url: "http://250bpm.com/blog:153",
		storyRank: 2
	},
	{
		by: "nnx",
		descendants: 0,
		id: 19769866,
		score: 1,
		time: 1556436607,
		title:
			"Why Big Tobacco and Big Vape Love Comparing Nicotine to Caffeine",
		type: "story",
		url:
			"https://www.theverge.com/2019/4/26/18513312/vape-tobacco-big-companies-nicotine-caffeine-comparison-drugs-chemicals",
		storyRank: 3
	},
	{
		by: "tomerv",
		descendants: 0,
		id: 19769859,
		score: 1,
		time: 1556436459,
		title: "Make Is (Probably) Fine",
		type: "story",
		url: "https://blog.yossarian.net/2019/04/23/Make-is-probably-fine",
		storyRank: 4
	}
];

// const render = data.map(i => {
// 	i.time = new Date(i.time * 1000);
// 	return Object.values(i);
// });
//
const getDataToRender = () => {
	let renderingData = data.map(i => {
		i.time = new Date(i.time * 1000);
		return Object.values(i);
	});
	return renderingData;
};

console.log(getDataToRender());
