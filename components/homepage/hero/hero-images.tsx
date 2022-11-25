import Image from 'next/image';

export const HeroImages = () => {
	return (
		<div className="absolute top-[60%] right-4 -z-20 ml-auto hidden -translate-y-1/2 sm:flex lg:right-8 xl:right-0">
			<div className="xl:p-4">
				<Image className="rounded shadow" src="/images/hero-1.webp" alt="hero 1" width={400} height={500} />
			</div>
			<div className="hidden xl:block">
				<div className="py-4 pl-2">
					<Image className="rounded shadow" src="/images/hero-2.webp" alt="hero 2" width={400} height={500} />
				</div>
				<div className="py-4 pl-2">
					<Image className="rounded shadow" src="/images/hero-3.webp" alt="hero 3" width={400} height={500} />
				</div>
			</div>
		</div>
	);
};
