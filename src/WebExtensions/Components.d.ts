import {ComponentsInterfaces} from './Components/ComponentsInterfaces';
import {ComponentsUtils} from './Components/ComponentsUtils';

/**
 * Components
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