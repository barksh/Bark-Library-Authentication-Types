/**
 * @author WMXPY
 * @namespace Authentication_V1
 * @description Post Register
 */

import { createUrlBuildFunction } from "../../util/path";

export const buildUrlForPostAccountRegisterV1 = createUrlBuildFunction(
    'v1',
    'account',
    'register',
);

export type PostAccountRegisterV1ProxyRequest = {

    readonly identifier: string;
    readonly password: string;
};

export type PostAccountRegisterV1ProxyResponse = {

    readonly identifier: string;
};
