import {nsISupports} from './nsISupports';

/**
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/MailNewsTypes2.idl
 */
export declare interface nsMsgPriority extends nsISupports {
    notSet: 0;
    none: 1;
    lowest: 2;
    low: 3;
    normal: 4;
    high: 5;
    highest: 6;
    // the default priority (if none) is set in the message
    Default: 4;
}