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
