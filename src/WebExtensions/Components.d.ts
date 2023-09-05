import {nsIEnvironment} from './Base/nsIEnvironment';
import {nsIFilePicker} from './Base/nsIFilePicker';
import {nsIPrefService} from './Base/nsIPrefService';
import {nsIJSCID} from './Base/nsIJSCID';
import {ComponentsInterfaces} from './Components/ComponentsInterfaces';
import {ComponentsResults} from './Components/ComponentsResults';
import {ComponentsUtils} from './Components/ComponentsUtils';

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