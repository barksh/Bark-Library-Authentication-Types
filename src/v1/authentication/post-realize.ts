/**
 * @author WMXPY
 * @namespace Authentication_V1
 * @description Post Realize
 */

import { createUrlBuildFunction } from "../../util/path";

export const buildUrlForPostRealizeV1 = createUrlBuildFunction(
    'v1',
    'authentication',
    'realize',
);

export enum InquiryActionType {

    CALLBACK = "CALLBACK",
    WEBHOOK = "WEBHOOK",
    CLOSE = "CLOSE",
}

export type InquiryActionPayloadType<T extends InquiryActionType>
    = T extends InquiryActionType.CALLBACK ? string
    : T extends InquiryActionType.WEBHOOK ? string
    : T extends InquiryActionType.CLOSE ? undefined
    : never;

export type InquiryAction<T extends InquiryActionType = any> = {

    readonly type: T;
    readonly payload: InquiryActionPayloadType<T>;
};

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
