import { FC, useEffect, useState } from 'react';
import DatePicker from '../../general/datepicker';

export const HeroSearch: FC = () => {
	const [open, setOpen] = useState('');
	const [selectedLocation, setSelectedLocation] = useState({ id: 0, region: '', state: '' });
	const [selectedDate, setSelectedDate] = useState({ start: new Date(), end: new Date() });

	useEffect(() => {
		if (open) document.addEventListener('click', (e: any) => e.target.name !== open && !e.target.name && setOpen(''));
	}, [open]);

	const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (open === e.currentTarget.name) setOpen('');
		else setOpen(e.currentTarget.name);
	};

	const handleSelectedLocation = (e: React.MouseEvent<HTMLButtonElement>) => {
		// const findLocation = locations.find((l) => l.id.toString() === e.currentTarget.id);
		// if (!!findLocation) setSelectedLocation(findLocation);
		// setOpen('');
	};

	return (
		<div className="absolute bottom-[13%] z-[9] hidden w-full text-base md:block">
			<div className="relative flex w-11/12 rounded bg-white p-3 text-text-color-1 shadow-xl lg:w-8/12">
				<div className="relative w-1/3 border-r pl-3">
					<div>Location</div>
					<button name="location" onClick={handleOpen} className="mt-1 w-full cursor-pointer text-left text-text-color-2">
						{selectedLocation.id ? selectedLocation.region + ' - ' + selectedLocation.state : 'Where are you going?'}
					</button>
					{open === 'location' && <div className="absolute -top-5 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>}
					{open === 'location' && (
						<div className="absolute bottom-20 -left-3 h-[300px] w-full overflow-y-scroll rounded bg-white p-3 text-sm shadow-xl scrollbar-hide">
							{/* {locations.map((l) => {
								return (
									<button
										id={l.id.toString()}
										className={`relative flex w-full cursor-pointer flex-row items-center gap-3 rounded p-2 text-left hover:bg-primary-1 hover:bg-opacity-10 hover:text-primary-1 ${
											selectedLocation.id === l.id ? 'bg-primary-1 bg-opacity-10 text-primary-1' : ''
										}`}
										onClick={handleSelectedLocation}
										key={l.id}
									>
										<div className="text-text-color-2">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
											</svg>
										</div>
										<div>
											<div className="font-medium">{l.region}</div>
											<div className="text-text-color-2">{l.state}</div>
										</div>
									</button>
								);
							})} */}
						</div>
					)}
				</div>
				<div className="w-1/3 border-r pl-6">
					<div className="relative">
						<div>Check in - Check out</div>
						<button name="date" onClick={handleOpen} className="mt-1 w-full cursor-pointer text-left text-text-color-2 focus:outline-none">
							{'Wed 2 Mar - Fri 11 Apr'}
						</button>
						{open === 'date' && <div className="absolute -top-5 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>}
					</div>
					{open === 'date' && (
						<div className="w-f absolute left-1/2 bottom-20 mb-3 w-fit -translate-x-1/2 rounded bg-white">
							<div className="p-4">
								<DatePicker />
							</div>
						</div>
					)}
				</div>
				<div className="w-1/3 pl-6">
					<div>Guest</div>
					<input className="mt-1 w-full text-text-color-2 focus:outline-none" type="text" placeholder="2 adults - 1 children - 1 room" />
				</div>
				<div className="relative flex w-1/4 items-center">
					<button className="absolute right-0 flex items-center gap-2 rounded bg-secondary-1 py-4 px-8">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
						</svg>
						<span>Search</span>
					</button>
				</div>
			</div>
		</div>
	);
};
