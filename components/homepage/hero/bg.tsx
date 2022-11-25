export const HeroBg = () => {
	return (
		<div className="absolute top-0 left-0 h-screen w-screen">
			<div
				className="absolute top-0 left-0 -z-30 h-full w-screen md:h-5/6"
				dangerouslySetInnerHTML={{ __html: '<img class="object-cover object-center h-full" src="/images/bg.webp" alt="bg" />' }}
			></div>
		</div>
	);
};
