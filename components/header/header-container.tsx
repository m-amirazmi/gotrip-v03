import { FC, ReactElement } from 'react';
import { IHeaderContainer } from '../../utils/interfaces';

export const HeaderContainer: FC<IHeaderContainer> = ({ children }) => {
	return (
		<div className="absolute top-0 left-0 z-10 w-full bg-transparent py-4 text-sm text-white">
			<div className="mx-auto flex items-center gap-4 px-4 lg:px-8 xl:container xl:px-0">{children}</div>
		</div>
	);
};
