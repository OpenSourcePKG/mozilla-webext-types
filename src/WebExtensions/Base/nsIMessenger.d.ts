import {nsISupports} from './nsISupports';

/**
 * @see https://searchfox.org/comm-central/source/mail/base/content/mailWindow.js#182
 */
export declare interface nsIMessenger extends nsISupports {

    eUnknown: 0;
    eDeleteMsg: 1;
    eMoveMsg: 2;
    eCopyMsg: 3;
    eMarkAllMsg: 4;
}