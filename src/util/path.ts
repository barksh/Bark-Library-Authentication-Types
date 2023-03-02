/**
 * @author WMXPY
 * @namespace Util
 * @description Path
 */

export type BarkUrlBuildFunction = (basePath: string) => string;

export const createUrlBuildFunction = (...elements: string[]): BarkUrlBuildFunction => {

    return (basePath: string): string => {

        const path: string = elements.join('/');

        return `${basePath}/${path}`;
    };
};
