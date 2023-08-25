import {ComponentsInterfaces} from './Components/ComponentsInterfaces';
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
    classes: {readonly [key: string]: nsIJSCID; };

    /**
     * interfaces
     */
    interfaces: ComponentsInterfaces;

    /**
     * results
     */
    results: ComponentsResults;

    /**
     * utils
     */
    utils: ComponentsUtils;
}