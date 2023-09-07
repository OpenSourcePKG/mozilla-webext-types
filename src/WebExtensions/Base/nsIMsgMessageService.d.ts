import {nsIMsgDBHdr} from './nsIMsgDBHdr';
import {nsIMsgWindow} from './nsIMsgWindow';
import {nsISupports} from './nsISupports';
import {nsIURI} from './nsIURI';
import {nsIUrlListener} from './nsIUrlListener';

/**
 * NsIMsgMessageService provides higher-level, UI-oriented calls for dealing with messages in a protocol-agnostic way.
 * Things the user would recognise as actions they initiated.
 * This covers things like displaying messages, copying them, saving them to disk, saving attachments...
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgMessageService.idl
 */
export declare interface nsIMsgMessageService extends nsISupports {

    /**
     * This method streams a message to the passed in consumer.
     * If aConvertData is true, it will create a stream converter from message rfc822 to star/star. It will also tack
     * aAdditionalHeader onto the url (e.g., "header=filter").
     * @param {string} aMessageURI - Uri of message to stream.
     * @param {nsISupports} aConsumer - Generally, a stream listener listening to the message.
     * @param {nsIMsgWindow} aMsgWindow - MsgWindow for give progress and status feedback.
     * @param {nsIUrlListener} aUrlListener - Gets notified when url starts and stops.
     * @param {boolean} aConvertData - Should we create a stream converter?
     * @param {string} aAdditionalHeader - Added to URI, e.g., "header=filter".
     * @param {[boolean]} aLocalOnly - Whether data should be retrieved only from local caches
     * If streaming over the network is required and this is true, then
     * an exception is thrown. This defaults to false.
     * Note: If we're offline, then even if aLocalOnly is false, we won't stream over the network.
     * @returns {nsIURI} The URL that gets run.
     */
    streamMessage(
        aMessageURI: string,
        aConsumer: nsISupports,
        aMsgWindow: nsIMsgWindow|null,
        aUrlListener: nsIUrlListener|null,
        aConvertData: boolean,
        aAdditionalHeader: string|null,
        aLocalOnly?: boolean
    ): nsIURI;

    /**
     * Now the the message datasource is going away we need away to go from message uri to go nsIMsgDBHdr.
     * @param {string} uri - A message uri to get nsIMsgDBHdr for.
     * @returns {nsIMsgDBHdr} NsIMsgDBHdr for specified uri or null if failed.
     */
    messageURIToMsgHdr(uri: string): nsIMsgDBHdr;
}