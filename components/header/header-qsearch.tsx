export const HeaderQSearch = () => {
	return (
		<div className="relative hidden md:block lg:w-[280px]">
			<div className="absolute top-1/2 left-3 -translate-y-1/2">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
			</div>
			<input
				className="w-full rounded bg-transparent py-4 pr-4 pl-10 placeholder:text-white placeholder:text-opacity-70 focus:bg-primary-4 focus:bg-opacity-25 focus:outline-none"
				type="text"
				placeholder="Destination..."
			/>
		</div>
	);
};
