/**
 * @author WMXPY
 * @namespace Authentication_V1
 * @description Post Refresh
 */

import { createUrlBuildFunction } from "../../util/path";

export const buildUrlForPostRefreshV1 = createUrlBuildFunction(
    'v1',
    'authentication',
    'refresh',
);

export type PostRefreshV1ProxyRequest = {

    readonly refreshToken: string;
};

export type PostRefreshV1ProxyResponse = {

    readonly token: string;
};
