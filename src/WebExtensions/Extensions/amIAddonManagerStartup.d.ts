import {nsIJSRAIIHelper} from '../Base/nsIJSRAIIHelper';
import {nsISupports} from '../Base/nsISupports';
import {nsIURI} from '../Base/nsIURI';

/**
 * @see https://searchfox.org/mozilla-central/source/toolkit/mozapps/extensions/amIAddonManagerStartup.idl
 */
export declare interface amIAddonManagerStartup extends nsISupports {

    registerChrome(manifestURI: nsIURI, entries: any[]): nsIJSRAIIHelper;
}