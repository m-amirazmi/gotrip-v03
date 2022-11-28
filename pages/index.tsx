import { GetServerSideProps } from 'next';
import { HeaderAuth } from '../components/header/header-auth';
import { HeaderCurrLang } from '../components/header/header-currlang';
import { HeaderLogo } from '../components/header/header-logo';
import { HeaderQSearch } from '../components/header/header-qsearch';
import { HeroBg } from '../components/homepage/hero/bg';
import { HeroContainer } from '../components/homepage/hero/hero-container';
import { HeroContent } from '../components/homepage/hero/hero-content';
import { HeroImages } from '../components/homepage/hero/hero-images';
import { HeaderContainer } from '../components/header/header-container';
import { IHomepage } from '../utils/interfaces';
import { HeroSearch } from '../components/homepage/hero/hero-search';
import { Promises } from '../components/homepage/promises';
import { PopularDestinations } from '../components/homepage/popular-destinations';
import { fetchData } from '../utils/helpers';

export default function Home({ currencies, languages, locations, homepage }: IHomepage) {
	return (
		<>
			<HeaderContainer>
				<HeaderLogo />
				<HeaderQSearch />
				<HeaderCurrLang currencies={currencies} languages={languages} />
				<HeaderAuth />
			</HeaderContainer>

			<HeroContainer>
				<HeroContent />
				<HeroImages />
				<HeroSearch locations={locations} />
			</HeroContainer>
			<HeroBg />

			{/* HIDE FOR MOBILE */}
			<div className="hidden sm:block">
				<Promises data={homepage?.promises} />
				<PopularDestinations />
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const [resCurrencies, resLanguages, resLocations, resHomepage] = await Promise.all([
		await fetchData('/currencies'),
		await fetchData('/languages'),
		await fetchData('/locations'),
		await fetchData('/homepage'),
	]);

	const { data: currencies } = resCurrencies;
	const { data: languages } = resLanguages;
	const { data: locations } = resLocations;
	const { data: homepage } = resHomepage;

	return {
		props: {
			currencies: currencies.data,
			languages: languages.data,
			locations: locations.data,
			homepage: homepage.data || null,
		},
	};
};
