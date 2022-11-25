import { FC, ReactElement } from 'react';

interface IHeroContainer {
	children: ReactElement[];
}

export const HeroContainer: FC<IHeroContainer> = ({ children }) => {
	return <div className="relative mx-auto h-screen w-screen px-4 lg:px-8 xl:container xl:px-0">{children}</div>;
};
