import {Browser} from '../../../Thunderbird/Browser';

/**
 * Tab
 * @see https://searchfox.org/comm-central/source/mail/components/extensions/parent/ext-mail.js#1129
 */
export interface Tab {

    /**
     * spaceId
     */
    spaceId?: number;

    /**
     * type
     */
    type: 'messageCompose' | 'messageDisplay' | 'content' | null;

    /**
     * Browser from thunderbird
     */
    browser?: Browser;
}