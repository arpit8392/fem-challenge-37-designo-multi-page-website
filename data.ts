export const navLinks = [
	{
		name: 'Our Company',
		href: '/about',
	},
	{
		name: 'Locations',
		href: '/locations',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
]

export const projectsNavLinks = [
	{
		title: 'web design',
		href: '/design/web',
		image: 'image-web-design.jpg',
	},
	{
		title: 'app design',
		href: '/design/app',
		image: 'image-app-design.jpg',
	},
	{
		title: 'graphic design',
		href: '/design/graphic',
		image: 'image-graphic-design.jpg',
	},
]

export const featuresData: Feature[] = [
	{
		id: 1,
		title: 'Passionate',
		description:
			'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
		icon: 'illustration-passionate.svg',
	},
	{
		id: 2,
		title: 'Resourceful',
		description:
			'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
		icon: 'illustration-resourceful.svg',
	},
	{
		id: 3,
		title: 'Friendly',
		description:
			'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
		icon: 'illustration-friendly.svg',
	},
]

export const designsData = [
	{
		name: 'Web',
		description:
			'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
		projects: [
			{
				title: 'express',
				details: 'A multi-carrier shipping website for ecommerce businesses',
				image: 'image-express.jpg',
			},
			{
				title: 'transfer',
				details:
					'Site for low-cost money transfers and sending money within seconds',
				image: 'image-transfer.jpg',
			},
			{
				title: 'photon',
				details:
					'A state-of-the-art music player with high-resolution audio and DSP effects',
				image: 'image-photon.jpg',
			},
			{
				title: 'builder',
				details:
					'Connects users with local contractors based on their location',
				image: 'image-builder.jpg',
			},
			{
				title: 'blogr',
				details:
					'Blogr is a platform for creating an online blog or publication',
				image: 'image-blogr.jpg',
			},
			{
				title: 'camp',
				details:
					'Get expert training in coding, data, design, and digital marketing',
				image: 'image-camp.jpg',
			},
		],
	},
	{
		name: 'App',
		description:
			'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
		projects: [
			{
				title: 'airfilter',
				details:
					'Solving the problem of poor indoor air quality by filtering the air',
				image: 'image-airfilter.jpg',
			},
			{
				title: 'eyecam',
				details:
					'Product that lets you edit your favorite photos and videos at any time',
				image: 'image-eyecam.jpg',
			},
			{
				title: 'faceit',
				details:
					'Get to meet your favorite internet superstar with the faceit app',
				image: 'image-faceit.jpg',
			},
			{
				title: 'todo',
				details: 'A todo app that features cloud sync with light and dark mode',
				image: 'image-todo.jpg',
			},
			{
				title: 'loopstudios',
				details: 'A VR experience app made for Loopstudios',
				image: 'image-loopstudios.jpg',
			},
		],
	},
	{
		name: 'Graphic',
		description:
			'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
		projects: [
			{
				title: 'tim brown',
				details: 'A book cover designed for Tim Brown’s new release, ‘Change’',
				image: 'image-change.jpg',
			},
			{
				title: 'boxed water',
				details: 'A simple packaging concept made for Boxed Water',
				image: 'image-boxed-water.jpg',
			},
			{
				title: 'science!',
				details: 'A poster made in collaboration with the Federal Art Project',
				image: 'image-science.jpg',
			},
		],
	},
]

export const locationsData: LocationData[] = [
	{
		location: 'Canada',
		illustrationImage: 'illustration-canada.svg',
		image: 'image-map-canada.png',
		office: {
			name: 'Designo Central Office',
			street: '3886 Wellington Street',
			city: 'Toronto, Ontario M9C 3J5',
		},
		contact: {
			phone: '+1 253-863-8967',
			mail: 'contact@designo.co',
		},
	},
	{
		location: 'Australia',
		illustrationImage: 'illustration-australia.svg',
		image: 'image-map-australia.png',
		office: {
			name: 'Designo AU Office',
			street: '19 Balonne Street',
			city: 'New South Wales 2443',
		},
		contact: {
			phone: '(02) 6720 9092',
			mail: 'contact@designo.au',
		},
	},
	{
		location: 'United Kingdom',
		illustrationImage: 'illustration-united-kingdom.svg',
		image: 'image-map-united-kingdom.png',
		office: {
			name: 'Designo UK Office',
			street: '13  Colorado Way',
			city: 'Rhyd-y-fro SA8 9GA',
		},
		contact: {
			phone: '078 3115 1400',
			mail: 'contact@designo.uk',
		},
	},
]
