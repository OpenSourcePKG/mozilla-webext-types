/**
 * @see https://github.com/retorquere/zotero-better-bibtex/blob/cf47d6859a6bcc27b641c08cc6a9442626afc562/typings/global.d.ts#L17
 */
export declare interface Osfile {

    OS: {

        /**
         * @see https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/OSFile.jsm/OS.Path
         */
        Path: {
            join: (...args: string[]) => string;
        };
    };
}