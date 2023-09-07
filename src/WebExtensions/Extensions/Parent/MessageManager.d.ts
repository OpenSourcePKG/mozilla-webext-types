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
     * @member {ExtensionData}
     */
    extension: ExtensionData;

    /**
     * @param {nsIMsgDBHdr} msgHdr
     */
    convert(msgHdr: nsIMsgDBHdr): MessageHeader;

    /**
     * @param {number} id
     */
    get(id: number): nsIMsgDBHdr|null;

    /**
     * @param messageList
     */
    startMessageList(messageList: any[]): any;
}