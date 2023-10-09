import {nsIEnvironment} from './Base/nsIEnvironment';
import {nsIFile} from './Base/nsIFile';
import {nsIFileOutputStream} from './Base/nsIFileOutputStream';
import {nsIFilePicker} from './Base/nsIFilePicker';
import {nsIMessenger} from './Base/nsIMessenger';
import {nsIPrefService} from './Base/nsIPrefService';
import {nsIJSCID} from './Base/nsIJSCID';
import {nsIScriptableInputStream} from './Base/nsIScriptableInputStream';
import {ComponentsInterfaces} from './Components/ComponentsInterfaces';
import {ComponentsResults} from './Components/ComponentsResults';
import {ComponentsUtils} from './Components/ComponentsUtils';
import {amIAddonManagerStartup} from './Extensions/amIAddonManagerStartup';

/**
 * Components
 *
 * @see https://github.com/kuba2k2/AutoarchiveReloaded/blob/73cde23731953ffa1e2f105bf66a39be1e1baf5b/src/webexperiment/thunderbirdClassic.d.ts
 */
export declare interface Components {

    /**
     * classes
     */
    classes: {
        readonly [key: string]: nsIJSCID|object;

        '@mozilla.org/process/environment;1': {
            getService(service: nsIEnvironment): nsIEnvironment;
        };

        '@mozilla.org/filepicker;1': {
            createInstance(instance: nsIFilePicker): nsIFilePicker;
        };

        '@mozilla.org/preferences-service;1': {
            getService(service: nsIPrefService): nsIPrefService;
        };

        '@mozilla.org/scriptableinputstream;1': {
            createInstance(instance: nsIScriptableInputStream): nsIScriptableInputStream;
        };

        '@mozilla.org/messenger;1': {
            createInstance(instance: nsIMessenger): nsIMessenger;
        };

        '@mozilla.org/addons/addon-manager-startup;1': {
            getService(service: amIAddonManagerStartup): amIAddonManagerStartup;
        };

        '@mozilla.org/file/local;1': {
            createInstance(instance: nsIFile): nsIFile;
        };

        '@mozilla.org/network/file-output-stream;1': {
            createInstance(instance: nsIFileOutputStream): nsIFileOutputStream;
        };
    };

    /**
     * @member {ComponentsInterfaces}
     */
    interfaces: ComponentsInterfaces;

    /**
     * @member {ComponentsResults}
     */
    results: ComponentsResults;

    /**
     * @member {ComponentsUtils}
     */
    utils: ComponentsUtils;
}