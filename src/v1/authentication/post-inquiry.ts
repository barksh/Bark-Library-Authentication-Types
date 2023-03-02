/**
 * @author WMXPY
 * @namespace Authentication_V1
 * @description Post Inquiry
 */

import { createUrlBuildFunction } from "../../util/path";

export const buildUrlForPostInquiryV1 = createUrlBuildFunction(
    'v1',
    'authentication',
    'inquiry',
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

export type PostInquiryV1ProxyRequest = {

    readonly domain: string;
    readonly actions?: InquiryAction[];
};

export type PostInquiryV1ProxyResponse = {

    readonly exposureKey: string;
    readonly hiddenKey: string;
};
