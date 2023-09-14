import {nsIIOService} from './Base/nsIIOService';
import {nsIWindowMediator} from './Base/nsIWindowMediator';

/**
 * Services object.
 */
export declare interface Services {

    /**
     * @member {nsIWindowMediator}
     */
    wm: nsIWindowMediator;

    /**
     * @member {nsIIOService}
     */
    io: nsIIOService;
}