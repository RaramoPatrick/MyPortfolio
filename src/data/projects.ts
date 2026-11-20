export interface ProjectDescriptionPart {
	text: string;
	href?: string;
	bold?: boolean;
}

interface Project {
	title: string;
	category: string;
	description: ProjectDescriptionPart[];
	image?: string;
	imageAlt?: string;
	theme: 'blue' | 'teal';
	caution?: string;
	link?: string;
	linkLabel?: string;
}

export const projects: Project[] = [
	{
		title: 'Automated Cutting',
		category: 'Waterjet tile-cutting machine',
		description: [
			{
				text: 'A computer-controlled cutting system designed to reduce manual alignment errors, improve cutting precision, and make operator workflows safer.',
			},
		],
		image: '/images/project2.jpg',
		imageAlt: 'Waterjet machine cutting tile',
		theme: 'teal',
	},
	{
		title: 'Dict Projects',
		category: 'DICT Projects',
		description: [
			{ text: 'In ' },
			{
				text: 'Davao City',
				href: 'https://www.google.com/search?kgmid=%2Fm%2F02gn1x',
			},
			{ text: ' and the wider ' },
			{
				text: 'Davao Region (Region XI)',
				href: 'https://www.google.com/search?kgmid=%2Fm%2F01r8rc',
			},
			{ text: ', the ' },
			{
				text: 'DICT Region XI',
				href: 'https://r11.dict.gov.ph/free-wi-fi-for-all/',
			},
			{ text: ' implements the ' },
			{ text: 'Free Wi-Fi for All', bold: true },
			{
				text: ' program to close the digital gap across both busy urban centers and remote upland or coastal communities.',
			},
		],
		image: '/images/project1.jpg',
		imageAlt: 'DICT Free Wi-Fi for All outreach near a fire truck in Magsaysay',
		theme: 'blue',
	},
	{
		title: 'Machine Learning Classification of Road Flood-Hazard Exposure in Metro Davao',
		category: 'Machine Learning',
		description: [
			{
				text: 'Classifies road segment exposure to supplied 5-, 25-, and 100-year flood hazard maps.',
			},
		],
		caution:
			'It does not forecast future flood dates, live rainfall, or real-world operational probabilities.',
		image: '/images/flood-hazard-map.png',
		imageAlt: 'Road flood-hazard exposure map for Metro Davao',
		link: 'https://floodnet-davao.onrender.com/',
		linkLabel: 'Open operational link',
		theme: 'blue',
	},
] as const;
