import { ReactElement } from 'react';

export interface ICurrencies {
	id: string;
	code: string;
	name: string;
	symbol: string;
	rate: number; // Compare to MYR
	created_at?: string;
	updated_at?: string;
}

export interface ILanguages {
	id: string;
	code: string;
	name: string;
	country: string;
	flag: string;
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
	currencies: ICurrencies[];
	languages: ILanguages[];
}

export interface IHeaderCurrLang {
	currencies: ICurrencies[];
	languages: ILanguages[];
	selectedCurrency?: ICurrencies;
	selectedLanguage?: ILanguages;
	handleShow?: () => void;
	handleSelected?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IHeaderContainer {
	children: ReactElement[];
}
