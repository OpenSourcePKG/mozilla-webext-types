import {EventHandler} from '../EventHandler';

/**
 * @see https://searchfox.org/mozilla-central/source/dom/webidl/XMLHttpRequestEventTarget.webidl#14
 */
export declare interface XMLHttpRequestEventTarget {

    onloadstart: EventHandler;

    onprogress: EventHandler;

    onabort: EventHandler;

    onerror: EventHandler;

    onload: EventHandler;

    ontimeout: EventHandler;

    onloadend: EventHandler;
}