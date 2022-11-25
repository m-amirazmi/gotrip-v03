import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import { ICurrencies, IHeaderCurrLang, ILanguages } from '../../utils/interfaces';
import { CurrLangPopup } from './header-currlang-popup';
import cookie from 'js-cookie';

export const HeaderCurrLang: FC<IHeaderCurrLang> = ({ currencies, languages }) => {
	const [show, setShow] = useState(false);
	const [selectedCurrency, setSelectedCurrency] = useState<ICurrencies>();
	const [selectedLanguage, setSelectedLanguage] = useState<ILanguages>();

	useEffect(() => {
		const getCookieCurrency = cookie.get('currency');
		const getCookieLanguage = cookie.get('language');

		if (!getCookieCurrency) {
			const findMYR = currencies.find((c) => c.code === 'MYR');
			if (!findMYR) return;
			cookie.set('currency', findMYR.code);
			setSelectedCurrency(findMYR);
		} else {
			const findCurrency = currencies.find((c) => c.code === getCookieCurrency);
			setSelectedCurrency(findCurrency);
		}

		if (!getCookieLanguage) {
			const findEnMY = languages.find((c) => c.code === 'en_MY');
			if (!findEnMY) return;
			cookie.set('language', findEnMY.code);
			setSelectedLanguage(findEnMY);
		} else {
			const findLanguage = languages.find((c) => c.code === getCookieLanguage);
			setSelectedLanguage(findLanguage);
		}
	}, [currencies, languages]);

	const handleSelected = (e: React.MouseEvent<HTMLButtonElement>) => {
		const type = e.currentTarget.name;
		const id = e.currentTarget.id;

		if (type === 'currency') {
			const findCurrency = currencies.find((c) => c.id === id);
			if (!findCurrency) return;
			cookie.set('currency', findCurrency.code);
			setSelectedCurrency(findCurrency);
		} else if (type === 'language') {
			const findLanguage = languages.find((c) => c.id === id);
			if (!findLanguage) return;
			cookie.set('language', findLanguage.code);
			setSelectedLanguage(findLanguage);
		}
	};

	const handleShow = () => setShow(!show);

	return (
		<>
			<div className="ml-auto flex cursor-pointer gap-4 rounded py-4 px-4 transition-all hover:bg-primary-4 hover:bg-opacity-25" onClick={handleShow}>
				<div>
					<span>{selectedCurrency?.code || 'MYR'}</span>
					<span className="hidden lg:inline"> - {selectedCurrency?.symbol || 'RM'}</span>
				</div>
				<div>|</div>
				<div className="flex items-center gap-3">
					<div>
						<Image className="rounded" src={`/flags/${selectedLanguage?.flag || 'my.svg'}`} alt="icon flag" width={28} height={28} />
					</div>
					<div>
						<span>{selectedLanguage?.name || 'English'}</span>
						<span className="hidden lg:inline"> - {selectedLanguage?.country || 'Malaysia'}</span>
					</div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
						<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>
				</div>
			</div>
			{show && (
				<CurrLangPopup
					currencies={currencies}
					languages={languages}
					selectedCurrency={selectedCurrency}
					selectedLanguage={selectedLanguage}
					handleShow={handleShow}
					handleSelected={handleSelected}
				/>
			)}
		</>
	);
};
