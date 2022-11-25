import { FC } from 'react';

export const HeroContent: FC = () => {
	return (
		<div className="absolute top-1/2 left-4 -translate-y-1/2 lg:left-8 xl:left-0">
			<h1 className="mb-8 flex flex-col text-5xl font-semibold text-white lg:text-6xl">
				<span className="mb-6 text-secondary-1">Where Would</span>
				<span>You Like To Go?</span>
			</h1>
			<p className="text-white">Checkout Beautiful Places Arround the World.</p>
		</div>
	);
};
