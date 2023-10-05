import {Osfile} from './Chrome/Osfile';

export type OsFilePath = 'resource://gre/modules/osfile.jsm';

export declare class ChromeUtils {

    public import(url: OsFilePath): Osfile;

}