import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'react-day-picker/dist/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HeadContent } from '../components/general/head-content';
import { LayoutMain } from '../components/layout/layout-main';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeadContent />
			<LayoutMain>
				<Component {...pageProps} />
			</LayoutMain>
		</>
	);
}
