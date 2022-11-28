import Image from 'next/image';
import { FC } from 'react';
import { promises } from '../../utils/data';
import { IPromise } from '../../utils/interfaces';

interface IPromisesProps {
	data: IPromise[];
}

export const Promises: FC<IPromisesProps> = ({ data }) => {
	console.log(data);
	if (!data || data.length === 0) return null;
	return (
		<div className="mx-auto my-16 px-4 lg:px-8 xl:container xl:px-0">
			<div className="grid grid-cols-3 gap-8">
				{data.map((p) => {
					return (
						<div key={p.id}>
							<div className="flex flex-col items-center justify-center rounded p-12 transition-all hover:shadow-xl">
								<div className="mb-8">
									<Image src={`/images/${p.image}`} alt={p.name} width={70} height={70} />
								</div>
								<div className="mb-4 text-lg font-medium">{p.name}</div>
								<div className="text-center text-base text-text-color-2">{p.description}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
