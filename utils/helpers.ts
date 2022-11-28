import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export async function fetchData(path: string) {
	return await axios.get(publicRuntimeConfig.DOMAIN_API + path);
}
