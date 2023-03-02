/**
 * @author WMXPY
 * @namespace Authentication_V1
 * @description Post Touch
 */

import { createUrlBuildFunction } from "../../util/path";

export const buildUrlForPostTouchV1 = createUrlBuildFunction(
    'v1',
    'authentication',
    'touch',
);

export type PostTouchV1ProxyRequest = {

    readonly exposureKey: string;
};

export type PostTouchV1ProxyResponse = {

    readonly exposureKey: string;
    readonly domain: string;
};
