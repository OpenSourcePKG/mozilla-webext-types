import {ExtensionParent} from '../Extensions/ExtensionParent';
import {ExtensionSupport} from '../Extensions/ExtensionSupport';
import {MailServices} from '../MailServices';
import {MailUtils} from '../MailUtils';
import {Services} from '../Services';

export type IteratorUtilsPath = 'resource:///modules/iteratorUtils.jsm';
export type MailServicesPath = 'resource:///modules/MailServices.jsm';
export type MailUtilsPath = 'resource:///modules/MailUtils.jsm';
export type ExtensionCommonPath = 'resource://gre/modules/ExtensionCommon.jsm';
export type ExtensionSupportPath = 'resource:///modules/ExtensionSupport.jsm';
export type ExtensionParentPath = 'resource://gre/modules/ExtensionParent.jsm';
export type ServicesPath = 'resource://gre/modules/Services.jsm';

/**
 */
export declare class ComponentsUtils {

    /**
     * @param path
     */
    // public import(path: IteratorUtilsPath): IteratorUtils;

    /**
     * @param {MailServicesPath} path
     * @returns {MailServices}
     */
    public import(path: MailServicesPath): MailServices;

    /**
     * @param {MailUtilsPath} path
     * @returns {MailUtils}
     */
    public import(path: MailUtilsPath): MailUtils;

    /**
     * @param {ExtensionCommonPath} path
     */
    public import(path: ExtensionCommonPath): any;

    /**
     * @param {ServicesPath} path
     * @returns {Services}
     */
    public import(path: ServicesPath): Services;

    /**
     * @param {ExtensionSupportPath} path
     * @returns {ExtensionSupport}
     */
    public import(path: ExtensionSupportPath): ExtensionSupport;

    /**
     * @param {ExtensionParentPath} path
     * @returns {ExtensionParent}
     */
    public import(path: ExtensionParentPath): ExtensionParent;

    /**
     * @param {string} path
     */
    public unload(path: string): void;

    /**
     * @param param1
     * @param param2
     * @param param3
     */
    public defineModuleGetter(param1: any, param2: any, param3: any): void;

}