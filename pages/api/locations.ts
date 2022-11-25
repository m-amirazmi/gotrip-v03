import type { NextApiRequest, NextApiResponse } from 'next';
import { locations } from '../../utils/data';

const reqMethods = {
	GET: getLocations,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const region: string = (req.query.region as string) || '';
	try {
		const data = await reqMethods[req.method as keyof typeof reqMethods]({ region });
		if (!!data) return res.status(200).json({ status: true, data });
	} catch (error) {
		return res.status(400);
	}
}

async function getLocations({ region }: { region: string }) {
	if (region) {
		const findCurrency = await locations.find((c) => c.region.toLowerCase() === region.toLowerCase());
		return findCurrency;
	} else {
		return await locations;
	}
}
