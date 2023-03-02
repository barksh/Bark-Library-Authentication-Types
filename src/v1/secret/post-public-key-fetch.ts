/**
 * @author WMXPY
 * @namespace Secret_V1
 * @description Post Public Key Fetch
 */

import { createUrlBuildFunction } from "../../util/path";

export const buildUrlForPostPublicKeyFetchV1 = createUrlBuildFunction(
    'v1',
    'secret',
    'public-key',
    'fetch',
);

export type PostPublicKeyFetchV1ProxyRequest = {

    readonly domain: string;
};

export type PostPublicKeyFetchV1ProxyResponse = {

    readonly domain: string;
    readonly publicKey: string;
};
