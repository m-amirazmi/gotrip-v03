import React, { FC, useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { IGuest, IHeroSearch, ILocation } from '../../../utils/interfaces';
import DatePicker from '../../general/datepicker';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const presetDate = { day: '', date: '', month: '', year: '' };

export const HeroSearch: FC<IHeroSearch> = ({ locations }) => {
	const [open, setOpen] = useState('');
	const [selectedLocation, setSelectedLocation] = useState<ILocation | undefined>();
	const [selectedDate, setSelectedDate] = useState<DateRange | undefined>();
	const [convertedDate, setConvertedDate] = useState({ from: { ...presetDate }, to: { ...presetDate } });
	const [guest, setGuest] = useState<IGuest>({ adults: 0, children: 0, rooms: 0 });

	useEffect(() => {
		if (open) {
			document.addEventListener('click', (e: any) => {
				if (!e.target.closest('#hero-search')) e.target.name !== open && !e.target.name && setOpen('');
			});
		}
	}, [open]);

	useEffect(() => {
		if (selectedDate && selectedDate.from && selectedDate.to) {
			const from = { ...presetDate };
			const to = { ...presetDate };
			from.date = new Date(selectedDate.from).getDate().toString();
			from.day = days[new Date(selectedDate.from).getDay()];
			from.month = months[new Date(selectedDate.from).getMonth()];
			from.year = new Date(selectedDate.from).getFullYear().toString();
			to.date = new Date(selectedDate.to).getDate().toString();
			to.day = days[new Date(selectedDate.to).getDay()];
			to.month = months[new Date(selectedDate.to).getMonth()];
			to.year = new Date(selectedDate.to).getFullYear().toString();

			setConvertedDate({ from, to });
		}
	}, [selectedDate]);

	const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (open === e.currentTarget.name) setOpen('');
		else setOpen(e.currentTarget.name);
	};

	const handleSelectedLocation = (e: React.MouseEvent<HTMLButtonElement>) => {
		const findLocation = locations.find((l) => l.region === e.currentTarget.id);
		if (!!findLocation) setSelectedLocation(findLocation);
		setOpen('');
	};

	const handleAddSubGuest = (e: React.MouseEvent<HTMLDivElement>) => {
		const idSplit = e.currentTarget.id.split('_');
		const type = idSplit[0];
		const operation = idSplit[1];

		if (type === 'adults') {
			let current = guest?.adults || 0;
			if (operation === 'add') current++;
			else if (operation === 'sub') {
				if (current <= 0) return;
				current--;
			}
			setGuest({ ...guest, adults: current });
		} else if (type === 'children') {
			let current = guest?.children || 0;
			if (operation === 'add') current++;
			else if (operation === 'sub') {
				if (current <= 0) return;
				current--;
			}
			setGuest({ ...guest, children: current });
		} else if (type === 'rooms') {
			let current = guest?.rooms || 0;
			if (operation === 'add') current++;
			else if (operation === 'sub') {
				if (current <= 0) return;
				current--;
			}
			setGuest({ ...guest, rooms: current });
		}
	};

	return (
		<div id="hero-search" className="absolute bottom-[13%] z-[9] hidden w-full text-base md:block">
			<div className="relative flex w-11/12 rounded bg-white p-3 text-text-color-1 shadow-xl lg:w-11/12 xl:w-8/12">
				<div className="relative w-3/12 border-r pl-3">
					<div>Location</div>
					<button name="location" onClick={handleOpen} className="mt-1 w-full cursor-pointer text-left text-text-color-2">
						{selectedLocation?.id ? selectedLocation.region + ' - ' + selectedLocation.state : 'Where are you going?'}
					</button>
					{open === 'location' && <div className="triangle absolute -top-5 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>}
					{open === 'location' && (
						<div className="absolute bottom-20 -left-3 h-[300px] w-full overflow-y-scroll rounded bg-white p-3 text-sm shadow-xl scrollbar-hide">
							{locations.map((l) => {
								return (
									<button
										id={l.region}
										className={`relative flex w-full cursor-pointer flex-row items-center gap-3 rounded p-2 text-left hover:bg-primary-1 hover:bg-opacity-10 hover:text-primary-1 ${
											selectedLocation?.region === l.region ? 'bg-primary-1 bg-opacity-10 text-primary-1' : ''
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
							})}
						</div>
					)}
				</div>
				<div className="w-4/12 border-r pl-6">
					<div className="relative">
						<div>Check in - Check out</div>
						<button name="date" onClick={handleOpen} className="mt-1 w-full cursor-pointer text-left text-text-color-2">
							{selectedDate && convertedDate.from && convertedDate.to ? (
								<>
									<span>
										{convertedDate.from.day} {convertedDate.from.date} {convertedDate.from.month}{' '}
										{new Date().getFullYear() !== +convertedDate.from.year ? convertedDate.from.year : ''}
									</span>
									<span> - </span>
									<span>
										{convertedDate.to.day} {convertedDate.to.date} {convertedDate.to.month} {new Date().getFullYear() !== +convertedDate.to.year ? convertedDate.to.year : ''}
									</span>
								</>
							) : (
								'eg: Wed 2 Mar - Fri 11 Apr'
							)}
						</button>
						{open === 'date' && <div className="triangle absolute -top-5 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>}
					</div>
					{open === 'date' && (
						<div className="w-f absolute left-1/2 bottom-20 mb-3 w-fit -translate-x-1/2 rounded bg-white">
							<div className="p-4">
								<DatePicker range={selectedDate} setRange={setSelectedDate} />
							</div>
						</div>
					)}
				</div>
				<div className="relative w-4/12 pl-5">
					<div>Guest</div>
					<button name="guest" onClick={handleOpen} className="mt-1 w-full cursor-pointer text-left text-text-color-2">
						{guest ? `${guest.adults} adults - ${guest.children} children - ${guest.rooms} room${guest.rooms > 1 ? 's' : ''}` : 'eg: 2 adults - 1 children - 1 room'}
					</button>
					{open === 'guest' && <div className="triangle absolute -top-5 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>}
					{open === 'guest' && (
						<div className="absolute bottom-20 left-0 h-[300px] w-full overflow-y-scroll rounded bg-white px-8 py-2 text-sm shadow-xl scrollbar-hide">
							<div className="flex h-full flex-col justify-center">
								<div className="flex h-1/3 flex-col justify-center border-b">
									<div className="flex items-center text-base font-medium">
										<div>Adults</div>
										<div className="ml-auto flex flex-row-reverse items-center gap-6">
											<div
												id="adults_add"
												className="flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-primary-3 text-primary-3"
												onClick={handleAddSubGuest}
											>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
													<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
												</svg>
											</div>
											<div>{guest?.adults || 0}</div>
											<div
												id="adults_sub"
												className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-primary-3 text-primary-3 ${
													guest?.adults === 0 ? 'cursor-default border-opacity-30 text-opacity-30' : ''
												}`}
												onClick={handleAddSubGuest}
											>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
													<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
												</svg>
											</div>
										</div>
									</div>
								</div>
								<div className="flex h-1/3 flex-col justify-center border-b">
									<div className="flex items-center text-base font-medium">
										<div>
											<p>Children</p>
											<small className="text-sm font-normal text-text-color-2">Ages 0 - 17</small>
										</div>
										<div className="ml-auto flex flex-row-reverse items-center gap-6">
											<div
												id="children_add"
												className="flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-primary-3 text-primary-3"
												onClick={handleAddSubGuest}
											>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
													<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
												</svg>
											</div>
											<div>{guest?.children || 0}</div>
											<div
												id="children_sub"
												className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-primary-3 text-primary-3 ${
													guest?.children === 0 ? 'cursor-default border-opacity-30 text-opacity-30' : ''
												}`}
												onClick={handleAddSubGuest}
											>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
													<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
												</svg>
											</div>
										</div>
									</div>
								</div>
								<div className="flex h-1/3 flex-col justify-center">
									<div className="flex items-center text-base font-medium">
										<div>Rooms</div>
										<div className="ml-auto flex flex-row-reverse items-center gap-6">
											<div
												id="rooms_add"
												className="flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-primary-3 text-primary-3"
												onClick={handleAddSubGuest}
											>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
													<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
												</svg>
											</div>
											<div>{guest?.rooms || 0}</div>
											<div
												id="rooms_sub"
												className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-primary-3 text-primary-3 ${
													guest?.rooms === 0 ? 'cursor-default border-opacity-30 text-opacity-30' : ''
												}`}
												onClick={handleAddSubGuest}
											>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
													<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
				<div className="relative flex w-1/12 items-center">
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
