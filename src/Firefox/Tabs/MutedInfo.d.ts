import {MutedInfoReason} from './MutedInfoReason';

/**
 * This object contains a boolean indicating whether the tab is muted, and the reason for the last state change.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/MutedInfo
 */
export interface MutedInfo {

    /**
     * The ID of the extension that last changed the muted state. Not set if an extension was not the reason the
     * muted state last changed.
     * @member {[string]}
     */
    extensionId?: string;

    /**
     * Whether the tab is currently muted. Equivalent to whether the muted audio indicator is showing.
     * @member {boolean}
     */
    muted: boolean;

    /**
     * The reason the tab was muted or unmuted. Not set if the tab's muted state has never been changed.
     * @member {[MutedInfoReason]}
     */
    reason?: MutedInfoReason;
}