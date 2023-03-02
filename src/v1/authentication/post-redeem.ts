/**
 * @author WMXPY
 * @namespace Authentication_V1
 * @description Post Redeem
 */

import { createUrlBuildFunction } from "../../util/path";

export const buildUrlForPostRedeemV1 = createUrlBuildFunction(
    'v1',
    'authentication',
    'redeem',
);

export type PostRedeemV1ProxyRequest = {

    readonly hiddenKey: string;
};

export type PostRedeemV1ProxyResponse = {

    readonly refreshToken: string;
};
