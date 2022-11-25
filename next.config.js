/** @type {import('next').NextConfig} */
const nextConfig = {
	publicRuntimeConfig: {
		DOMAIN: process.env.DOMAIN,
		DOMAIN_API: process.env.DOMAIN_API,
	},
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = nextConfig;
