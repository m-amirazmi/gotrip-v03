import { GetServerSideProps } from 'next';
import axios from 'axios';
import { HeaderAuth } from '../components/header/header-auth';
import { HeaderCurrLang } from '../components/header/header-currlang';
import { HeaderLogo } from '../components/header/header-logo';
import { HeaderQSearch } from '../components/header/header-qsearch';
import { HeroBg } from '../components/homepage/hero/bg';
import { HeroContainer } from '../components/homepage/hero/hero-container';
import { HeroContent } from '../components/homepage/hero/hero-content';
import { HeroImages } from '../components/homepage/hero/hero-images';
import { HeaderContainer } from '../components/header/header-container';
import getConfig from 'next/config';
import { IHomepage } from '../utils/interfaces';
import { HeroSearch } from '../components/homepage/hero/hero-search';
import { Promises } from '../components/homepage/promises';
const { publicRuntimeConfig } = getConfig();

export default function Home({ currencies, languages, locations }: IHomepage) {
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
				<Promises />
				<div>Here is it</div>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const [resCurrencies, resLanguages, resLocations] = await Promise.all([
		await axios.get(publicRuntimeConfig.DOMAIN_API + '/currencies'),
		await axios.get(publicRuntimeConfig.DOMAIN_API + '/languages'),
		await axios.get(publicRuntimeConfig.DOMAIN_API + '/locations'),
	]);

	const { data: currencies } = resCurrencies;
	const { data: languages } = resLanguages;
	const { data: locations } = resLocations;

	if (currencies.status && languages.status) {
		return {
			props: { currencies: currencies.data, languages: languages.data, locations: locations.data },
		};
	}
	return { props: {}, notFound: true };
};
