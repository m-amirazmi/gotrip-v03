import Image from 'next/image';
import Link from 'next/link';

export const HeaderLogo = () => {
	return (
		<Link href="/">
			<Image src="/images/logo.svg" alt="logo" width={143} height={50} />
		</Link>
	);
};
