import {XMLHttpRequestEventTarget} from './XMLHttpRequest/XMLHttpRequestEventTarget';
import {XMLHttpRequestResponseType} from './XMLHttpRequest/XMLHttpRequestResponseType';

/**
 * @see https://searchfox.org/mozilla-central/source/dom/webidl/XMLHttpRequest.webidl
 */
export declare interface nsIXMLHttpRequest extends XMLHttpRequestEventTarget {

    // states
    UNSENT: 0;
    OPENED: 1;
    HEADERS_RECEIVED: 2;
    LOADING: 3;
    DONE: 4;

    readonly readyState: number;

    open(method: string, url: string, async?: boolean, user?: string, password?: string): void;

    setRequestHeader(header: string, value: string): void;

    timeout: number;

    withCredentials: boolean;

    // todo XMLHttpRequestUpload
    upload: unknown;

    // todo |XMLHttpRequestBodyInit
    send(body?: Document): void;

    readonly responseURL: string;

    readonly status: number;

    readonly statusText: string;

    getResponseHeader(header: string): string|undefined;

    getAllResponseHeaders(): string;

    overrideMimeType(mime: string): void;

    responseType: XMLHttpRequestResponseType;

    readonly response: any;

    readonly responseText: string;

    readonly responseXML?: Document;

    // Mozilla-specific stuff

    mozBackgroundRequest: boolean;

    // TODO
}