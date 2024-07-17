import {nsIIOService} from './Base/nsIIOService';
import {nsIPrefBranch} from './Base/nsIPrefBranch';
import {nsIWindowMediator} from './Base/nsIWindowMediator';

/**
 * Services object.
 */
export declare interface Services {

    /**
     * @member {nsIPrefBranch}
     */
    prefs: nsIPrefBranch;

    /**
     * Platform
     * @member {string}
     */
    platform: string;

    /**
     * @member {nsIWindowMediator}
     */
    wm: nsIWindowMediator;

    /**
     * @member {nsIIOService}
     */
    io: nsIIOService;
}