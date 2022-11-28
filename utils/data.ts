export const currencies = [
	{ id: '1', code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', rate: 1 },
	{ id: '2', code: 'USD', name: 'United States Dollar', symbol: '$', rate: 0.22 },
	{ id: '3', code: 'GBP', name: 'Pound Sterling', symbol: '£', rate: 0.18 },
	{ id: '4', code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', rate: 0.31 },
	{ id: '5', code: 'BND', name: 'Brunei Dollar', symbol: 'B$', rate: 0.31 },
	{ id: '6', code: 'THB', name: 'Thai Baht', symbol: '฿', rate: 7.96 },
	{ id: '7', code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', rate: 3480.42 },
	{ id: '8', code: 'PHP', name: 'Phillipines Peso', symbol: '₱', rate: 12.6 },
	{ id: '9', code: 'EUR', name: 'Euro', symbol: '€', rate: 0.21 },
];

export const languages = [
	{ id: '1', name: 'Malay', country: 'Malaysia', code: 'ms_MY', flag: 'my.svg' },
	{ id: '2', name: 'English', country: 'Malaysia', code: 'en_MY', flag: 'my.svg' },
	{ id: '3', name: 'English', country: 'Singapore', code: 'en_SG', flag: 'sg.svg' },
	{ id: '4', name: 'English', country: 'United Kingdom', code: 'en_GB', flag: 'gb.svg' },
	{ id: '5', name: 'English', country: 'United States', code: 'en_US', flag: 'us.svg' },
];

export const locations = [
	{ id: '1', region: 'Ampang', state: 'Selangor' },
	{ id: '2', region: 'Gombak', state: 'Selangor' },
	{ id: '3', region: 'KLCC', state: 'Kuala Lumpur' },
	{ id: '4', region: 'Petaling Jaya', state: 'Selangor' },
	{ id: '5', region: 'Damansara', state: 'Selangor' },
];

export const promises = [
	{
		id: '1',
		name: 'Best Price Guarantee',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper porttitor nunc, id laoreet risus dapibus eleifend.',
		image: 'icon-bestprice.svg',
	},
	{
		id: '2',
		name: 'Easy & Quick Booking',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper porttitor nunc, id laoreet risus dapibus eleifend.',
		image: 'icon-booking.svg',
	},
	{
		id: '3',
		name: 'Customer Care 24/7',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper porttitor nunc, id laoreet risus dapibus eleifend.',
		image: 'icon-cs.svg',
	},
];

export const popular_destinations = {
	meta: { title: 'Connect With Other Travellers', subtitle: 'These popular destinations have a lot to offer' },
	values: [
		{ id: '1', country: 'United Kingdom', travellers_no: 147681, image: '' },
		{ id: '2', country: 'Italy', travellers_no: 147681, image: '' },
		{ id: '3', country: 'France', travellers_no: 147681, image: '' },
		{ id: '4', country: 'Turkey', travellers_no: 147681, image: '' },
		{ id: '5', country: 'Spain', travellers_no: 147681, image: '' },
	],
};

export const bestsellers = {
	meta: { title: 'Best Seller', subtitle: 'Interdum et malesuada fames ac ante ipsum' },
	values: [
		{
			id: '1',
			name: 'The Montcalm At Brewery London City',
			location: { region: 'Westminster Borough', state: 'London' },
			no_rating: 4.8,
			no_reviews: 3014,
			price_start: 72,
			tags: ['breakfast included'],
		},
		{
			id: '2',
			name: 'The Montcalm At Brewery London City',
			location: { region: 'Westminster Borough', state: 'London' },
			no_rating: 4.8,
			no_reviews: 3014,
			price_start: 72,
			tags: ['breakfast included'],
		},
		{
			id: '3',
			name: 'The Montcalm At Brewery London City',
			location: { region: 'Westminster Borough', state: 'London' },
			no_rating: 4.8,
			no_reviews: 3014,
			price_start: 72,
			tags: ['breakfast included'],
		},
		{
			id: '4',
			name: 'The Montcalm At Brewery London City',
			location: { region: 'Westminster Borough', state: 'London' },
			no_rating: 4.8,
			no_reviews: 3014,
			price_start: 72,
			tags: ['breakfast included'],
		},
	],
};

export const featured_reviews = {
	meta: {
		title: 'What our customers are saying us?',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.',
		happy_people: '13m+',
		overall_rating: 4.88,
	},
	values: [
		{
			id: '1',
			hotel: 'Hotel Equatorial Melaka',
			rating: 4,
			description: 'Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.',
			reviewer_img: '',
			reviewer_name: 'Courtney Henry',
			reviewer_job: 'Web Designer',
		},
		{
			id: '2',
			hotel: 'Hotel Equatorial Melaka',
			rating: 4,
			description: 'Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.',
			reviewer_img: '',
			reviewer_name: 'Courtney Henry',
			reviewer_job: 'Web Designer',
		},
		{
			id: '3',
			hotel: 'Hotel Equatorial Melaka',
			rating: 4,
			description: 'Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.',
			reviewer_img: '',
			reviewer_name: 'Courtney Henry',
			reviewer_job: 'Web Designer',
		},
	],
};

export const featured_articles = {
	meta: { title: 'Get inspiration for your next trip', subtitle: 'Interdum et malesuada fames' },
	values: [
		{ id: '1', title: '10 European ski destinations you should visit this winter', created_at: 1669412693000, image: '' },
		{ id: '2', title: 'Booking travel during Corona: good advice in an uncertain time', created_at: 1669412693000, image: '' },
		{ id: '3', title: 'Where can I go? 5 amazing countries that are open right now', created_at: 1669412693000, image: '' },
		{ id: '4', title: 'The best times & places to see the Northern Lights in Iceland', created_at: 1669412693000, image: '' },
	],
};
