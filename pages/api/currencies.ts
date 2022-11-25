import type { NextApiRequest, NextApiResponse } from 'next';
import { currencies } from '../../utils/data';

const reqMethods = {
	GET: getCurrencies,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const code: string = (req.query.code as string) || '';
	try {
		const data = await reqMethods[req.method as keyof typeof reqMethods]({ code });
		if (!!data) return res.status(200).json({ status: true, data });
	} catch (error) {
		return res.status(400);
	}
}

async function getCurrencies({ code }: { code: string }) {
	if (code) {
		const findCurrency = await currencies.find((c) => c.code === code);
		return findCurrency;
	} else {
		return await currencies;
	}
}
