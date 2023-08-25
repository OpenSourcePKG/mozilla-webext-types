import {Type} from './Type';

/**
 * nsIJSCID
 */
export declare interface nsIJSCID {

    /**
     * getService
     * @param type
     */
    getService<T>(type: Type<T>): T;

    /**
     * createInstance
     * @param type
     */
    createInstance<T>(type: Type<T>): T;
}