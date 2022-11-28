import type { NextApiRequest, NextApiResponse } from 'next';
import { promises, bestsellers, featured_articles, featured_reviews, popular_destinations } from '../../utils/data';

const reqMethods = {
	GET: getHomepageData,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const data = await reqMethods[req.method as keyof typeof reqMethods]();
		if (!!data) return res.status(200).json({ status: true, data });
	} catch (error) {
		return res.status(400);
	}
}

async function getHomepageData() {
	return {
		promises,
		bestsellers,
		featured_articles,
		featured_reviews,
		popular_destinations,
	};
}
