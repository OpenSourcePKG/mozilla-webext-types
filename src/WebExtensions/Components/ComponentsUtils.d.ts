/**
 * ComponentsUtils
 */
export type IteratorUtilsPath = 'resource:///modules/iteratorUtils.jsm';
export type MailServicesPath = 'resource:///modules/MailServices.jsm';
export type ExtensionCommonPath = 'resource://gre/modules/ExtensionCommon.jsm';

/**
 * ComponentsUtils
 */
export declare class ComponentsUtils {

    /**
     * import
     * @param path
     */
    public import(path: IteratorUtilsPath): IteratorUtils;

    /**
     * import
     * @param path
     */
    public import(path: MailServicesPath): MailServicesExport;

    /**
     * import
     * @param path
     */
    public import(path: ExtensionCommonPath): any;

    /**
     * unload
     * @param path
     */
    public unload(path: string): void;

    /**
     * defineModuleGetter
     * @param param1
     * @param param2
     * @param param3
     */
    public defineModuleGetter(param1: any, param2: any, param3: any): void;

}