import { ReactElement } from 'react';
export interface IGuest {
	adults: number;
	children: number;
	rooms: number;
}
export interface ICurrency {
	id: string;
	code: string;
	name: string;
	symbol: string;
	rate: number; // Compare to MYR
	created_at?: string;
	updated_at?: string;
}

export interface ILanguage {
	id: string;
	code: string;
	name: string;
	country: string;
	flag: string;
	created_at?: string;
	updated_at?: string;
}

export interface ILocation {
	id: string;
	region: string;
	state: string;
	created_at?: string;
	updated_at?: string;
}

export interface IMeta {
	title: string;
	subtitle: string;
	happy_people: string | undefined;
	overall_rating: number | undefined;
}

export interface IPromise {
	id: string;
	name: string;
	description: string;
	image: string;
	created_at?: string;
	updated_at?: string;
}

export interface IPopularDestinations {
	meta: IMeta;
	values: {
		id: string;
		country: string;
		travellers_no: number;
		image: string;
	}[];
	created_at?: string;
	updated_at?: string;
}

export interface IBestsellers {
	meta: IMeta;
	values: {
		id: string;
		name: string;
		location: {
			region: string;
			state: string;
		};
		no_rating: number;
		no_reviews: number;
		price_start: number;
		tags: string[];
	}[];
}

export interface IFeaturedReviews {
	meta: IMeta;
	values: {
		id: string;
		hotel: string;
		rating: number;
		description: string;
		reviewer_img: string;
		reviewer_name: string;
		reviewer_job: string;
	}[];
}

export interface IFeaturedArticles {
	meta: IMeta;
	values: {
		id: string;
		title: string;
		created_at: number;
		image: string;
	}[];
}

export interface IAPICurrencies {
	status: boolean;
	data: [
		{
			id: string;
			code: string;
			name: string;
			symbol: string;
			rate: number; // Compare to MYR
			created_at?: string;
			updated_at?: string;
		}
	];
}

export interface IHomepage {
	currencies: ICurrency[];
	languages: ILanguage[];
	locations: ILocation[];
	homepage: {
		promises: IPromise[];
		popular_destinations: IPopularDestinations;
		bestsellers: IBestsellers;
		featured_reviews: IFeaturedReviews;
		featured_articles: IFeaturedArticles;
	};
}

export interface IHeaderCurrLang {
	currencies: ICurrency[];
	languages: ILanguage[];
	selectedCurrency?: ICurrency;
	selectedLanguage?: ILanguage;
	handleShow?: () => void;
	handleSelected?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IHeaderContainer {
	children: ReactElement[];
}

export interface IHeroSearch {
	locations: ILocation[];
}
