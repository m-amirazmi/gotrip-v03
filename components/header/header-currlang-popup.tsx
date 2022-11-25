import Image from 'next/image';
import { FC } from 'react';
import { IHeaderCurrLang } from '../../utils/interfaces';

export const CurrLangPopup: FC<IHeaderCurrLang> = ({ currencies, languages, selectedCurrency, selectedLanguage, handleShow, handleSelected }) => {
	if (!currencies) return null;

	return (
		<div className="fixed top-0 left-0 z-30 h-screen w-screen">
			<div className="h-full w-full bg-black bg-opacity-50"></div>
			<div className="absolute top-1/2 left-1/2 z-40 w-full -translate-x-1/2 -translate-y-1/2 px-3 sm:w-[600px] sm:px-0">
				<div className=" flex  flex-col rounded bg-white text-black">
					<div>
						<div className="mb-2 flex items-center justify-between border-b px-6 py-3 pb-2 text-base sm:px-6 sm:py-6 sm:pb-4 sm:text-lg">
							<span>Choose your currency</span>
							<div className="cursor-pointer" onClick={handleShow}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</div>
						</div>
						<div className="grid grid-cols-2 px-3 pt-0 sm:grid-cols-3 sm:px-6">
							{currencies
								.sort((a, b) => {
									if (a.name < b.name) return -1;
									if (a.name > b.name) return 1;
									return 0;
								})
								.map((c) => {
									return (
										<button
											className={`cursor-pointer rounded p-2 px-4 text-left transition-all hover:bg-bg-color-1 hover:text-primary-1 sm:p-4 ${
												selectedCurrency?.id === c.id ? 'bg-primary-3 bg-opacity-20 text-primary-1' : ''
											}`}
											id={c.id}
											name="currency"
											key={c.id}
											onClick={handleSelected}
										>
											<div className="mb-1 font-medium">{c.name}</div>
											<div className="text-text-color-2">
												{c.code} - {c.symbol}
											</div>
										</button>
									);
								})}
						</div>
					</div>
					<div>
						<div className="mb-4 border-b px-6 py-3 pb-2 text-base sm:px-6 sm:py-6 sm:pb-4 sm:text-lg">Choose your language</div>
						<div className="grid grid-cols-2 px-3 py-6 pt-0 sm:grid-cols-3 sm:px-6">
							{languages
								.sort((a, b) => {
									if (a.country < b.country) return -1;
									if (a.country > b.country) return 1;
									return 0;
								})
								.map((l) => {
									return (
										<button
											className={`flex cursor-pointer items-center gap-3 rounded p-2 px-4 text-left transition-all hover:bg-bg-color-1 hover:text-primary-1 sm:p-4 ${
												selectedLanguage?.id === l.id ? 'bg-primary-3 bg-opacity-20 text-primary-1' : ''
											}`}
											id={l.id}
											name="language"
											key={l.id}
											onClick={handleSelected}
										>
											<div className="">
												<Image src={`/flags/${l.flag}`} alt={`${l.country} flags`} width={32} height={32} />
											</div>
											<div>
												<div className="mb-1 font-medium">{l.name}</div>
												<div className="text-xs text-text-color-2 sm:text-sm">
													<div>{l.country}</div>
												</div>
											</div>
										</button>
									);
								})}
						</div>
					</div>
					<div className="mb-4 flex w-full justify-center self-center px-6 text-white sm:mb-6">
						<button className="w-full rounded bg-primary-1 py-2 hover:bg-opacity-90" onClick={handleShow}>
							CONTINUE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
