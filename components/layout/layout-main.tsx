import { FC, ReactElement } from 'react';
import { Jost } from '@next/font/google';

interface ILayoutMain {
	children: ReactElement;
}

const jost = Jost({ subsets: ['latin'] });

export const LayoutMain: FC<ILayoutMain> = ({ children }) => {
	return (
		<main className={jost.className}>
			<div className="relative top-0 left-0 w-screen">{children}</div>
		</main>
	);
};
