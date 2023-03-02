/**
 * @author WMXPY
 * @namespace Authentication_V1
 * @description Post Realize
 */

import { createUrlBuildFunction } from "../../util/path";
import { InquiryAction } from "./post-inquiry";

export const buildUrlForPostRealizeV1 = createUrlBuildFunction(
    'v1',
    'authentication',
    'realize',
);

export type PostRealizeV1ProxyRequest = {

    readonly exposureKey: string;
    readonly accountIdentifier: string;
    readonly password: string;
};

export type PostRealizeV1ProxyResponse = {

    readonly exposureKey: string;
    readonly accountIdentifier: string;

    readonly actions?: InquiryAction[];
};
