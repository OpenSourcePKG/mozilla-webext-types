import {Browser} from '../../../Thunderbird/Browser';
import {TabBase} from './TabBase';

/**
 * Tab
 * @see https://searchfox.org/comm-central/source/mail/components/extensions/parent/ext-mail.js#1129
 */
export class Tab extends TabBase {

    /**
     * spaceId
     */
    public spaceId?: number;

    /**
     * type
     */
    public type: 'messageCompose' | 'messageDisplay' | 'content' | null;

    /**
     * Browser from thunderbird
     */
    public browser?: Browser;

}