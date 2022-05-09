/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type fetch from 'node-fetch';
export { RequestInit } from 'node-fetch'; // TODO: add more exports as needed here


const fetchPromise: Promise<typeof fetch> = eval('import("node-fetch")').then((mod: { default: typeof fetch }) => mod.default);
const obter: typeof fetch = (...args) => fetchPromise.then(fetch => fetch(...args));
export default obter;