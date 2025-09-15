import {Osfile} from './Chrome/Osfile';
import {MailServices} from './MailServices.js';
import {Services as TServices} from './Services';

export type OsFilePath = 'resource://gre/modules/osfile.jsm';

/**
 * ChromeUtils Modules.
 */
export interface ChromeUtilsModules {
    Services: TServices;
    'resource://gre/modules/osfile.jsm': Osfile;
    'resource://modules/MailServices.jsm': MailServices;
}

/**
 * ChromeUtils.
 */
export declare class ChromeUtils {

    /**
     * Import target.
     * @param {ChromeUtilsModules|string} module
     * @returns {ChromeUtilsModules[S]}
     * @deprecated Use new importESModule, read more https://developer.thunderbird.net/add-ons/updating/tb128#esmification.
     */
    public import: <S extends keyof ChromeUtilsModules>(module: S) => ChromeUtilsModules[S];

    /**
     * Import a ESModule.
     * @param {ChromeUtilsModules|string} module
     * @returns {ChromeUtilsModules[S]}
     */
    public importESModule: <S extends keyof ChromeUtilsModules>(module: S) => ChromeUtilsModules[S];

    /**
     * Define Module Getter.
     * @param {any} target
     * @param {string} variable
     * @param {string} path
     * @deprecated Use new defineESModuleGetters, read more https://developer.thunderbird.net/add-ons/updating/tb128#esmification.
     */
    public defineModuleGetter: (target: any, variable: string, path: string) => void;

    /**
     * define ESModule Getter
     * @param {any} target
     * @param {any} mappings
     */
    public defineESModuleGetters: (target: any, mappings: any) => void;

}