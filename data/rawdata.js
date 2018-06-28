module.exports = [
    // Load in JSON
    {
		title: '餐廳',
		description: '周末班',
		company: '隔壁的店',
		contact: {
			phone: "0912345678",
			email: "test@test.com"
		},
		category: "餐飲",
		keyword: ["西點","點心"],
		weighting: 2,
		address:{
			details:"信義路1號",
			district:"大安區",
			city:"台北市"
		},
		status: "inactive",
		datePosted: Date.now(),
		dateExpired: (Date.now() + 7*24*60*60*1000),
    },
    {
		title: '餐廳999',
		description: '周末班',
		company: '99店',
		contact: {
			phone: "0912345678",
			email: "test@test.com"
		},
		category: "餐飲",
		keyword: ["西點","點心"],
		weighting: 7,
		address:{
			details:"信義路1號",
			district:"大安區",
			city:"台北市"
		},
		status: "active",
		datePosted: Date.now() - 7*24*60*60*1000,
		dateExpired: (Date.now() + 7*24*60*60*1000)
    },
    {
		title: '早餐店',
		description: '周一班',
		company: '隔壁的店',
		contact: {
			phone: "0912345678",
			email: "test@test.com"
		},
		category: "餐飲",
		keyword: ["西點","點心"],
		weighting: 3,
		address:{
			details:"信義路1號",
			district:"大安區",
			city:"台北市"
		},
		status: "active",
		datePosted: Date.now() - 3*24*60*60*1000,
		dateExpired: (Date.now() + 14*24*60*60*1000)
    },
    {
		title: '牛排館',
		description: '周末班',
		company: '隔壁的店',
		contact: {
			phone: "0912345678",
		},
		category: "餐飲",
		keyword: ["西點","點心"],
		weighting: 6,
		address:{
			details:"信義路1號",
			district:"北區",
			city:"新竹市"
		},
		status: "active",
		datePosted: Date.now() - 2*24*60*60*1000,
		dateExpired: (Date.now() + 7*24*60*60*1000)
    },
    {
		title: '美式餐廳',
		description: '周末班',
		company: '隔壁的店',
		contact: {
			phone: "0912345678",
		},
		category: "餐飲",
		keyword: ["西點","點心"],
		weighting: 7,
		address:{
			details:"信義路1號",
			district:"北投區",
			city:"台中市"
		},
		status: "active",
		datePosted: Date.now() - 1*24*60*60*1000,
		dateExpired: (Date.now() + 8*24*60*60*1000)
    },
    {
		title: '果汁廳',
		description: '周末班',
		company: '隔壁的店',
		contact: {
			phone: "0912345678",
		},
		category: "餐飲",
		keyword: ["飲料"],
		weighting: 9,
		address:{
			details:"信義路1號",
			district:"北投區",
			city:"台中市"
		},
		status: "active",
		datePosted: Date.now() - 10*24*60*60*1000,
		dateExpired: (Date.now() + 2*24*60*60*1000)
    },
    {
		title: '最新的餐廳',
		description: '周末班',
		company: '小店一個',
		contact: {
			phone: "0912345678",
			email: "test@test.com"
		},
		category: "餐飲",
		keyword: ["牛排","果汁"],
		weighting: 9,
		address:{
			details:"信義路1號",
			district:"大安區",
			city:"台北市"
		},
		status: "active",
		datePosted: Date.now() - 4*24*60*60*1000,
		dateExpired: (Date.now() + 3*24*60*60*1000)
    },
    {
		title: '消夜No1',
		description: '晚班',
		company: '甜不辣店',
		contact: {
			phone: "0912255784",
			email: "test@test.com"
		},
		category: "餐飲",
		keyword: ["消夜","甜不辣"],
		weighting: 7,
		address:{
			details:"信義路1號",
			district:"大安區",
			city:"台北市"
		},
		status: "inactive",
		datePosted: Date.now() - 7*24*60*60*1000,
		dateExpired: (Date.now() + 7*24*60*60*1000)
    },
    {
		title: '消夜No2',
		description: '晚班',
		company: '甜不辣店',
		contact: {
			phone: "0912255784",
			email: "test@test.com"
		},
		category: "餐飲",
		keyword: ["消夜","甜不辣"],
		weighting: 7,
		address:{
			details:"信義路1號",
			district:"大安區",
			city:"台北市"
		},
		status: "active",
		datePosted: Date.now() - 7*24*60*60*1000,
		dateExpired: (Date.now() + 7*24*60*60*1000)
    }
];