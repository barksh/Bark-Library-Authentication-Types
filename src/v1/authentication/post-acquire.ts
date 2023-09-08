/**
 * @author WMXPY
 * @namespace Authentication_V1
 * @description Post Acquire
 */

import { createUrlBuildFunction } from "../../util/path";

export const buildUrlForPostAcquireV1 = createUrlBuildFunction(
    'v1',
    'authentication',
    'acquire',
);

export type PostAcquireV1ProxyRequest = {

    readonly domain: string;
    readonly accountIdentifier: string;
    readonly password: string;
};

export type PostAcquireV1ProxyResponse = {

    readonly token: string;
    readonly accountIdentifier: string;
};
