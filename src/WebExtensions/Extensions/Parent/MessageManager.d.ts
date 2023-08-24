import {MessageHeader} from '../../../Thunderbird/Messages/MessageHeader';
import {nsIMsgDBHdr} from '../../Base/nsIMsgDBHdr';
import {ExtensionData} from '../ExtensionData';

/**
 * MessageManager
 *
 * @see https://searchfox.org/comm-central/source/mail/components/extensions/parent/ext-mail.js#2831
 */
export interface MessageManager {

    /**
     * extension
     */
    extension: ExtensionData;

    /**
     * convert
     * @param msgHdr
     */
    convert(msgHdr: nsIMsgDBHdr): MessageHeader;

    /**
     * get
     * @param id
     */
    get(id: string): nsIMsgDBHdr|null;

    /**
     * startMessageList
     * @param messageList
     */
    startMessageList(messageList: any[]): any;
}