import {nsIFile} from './nsIFile';

/**
 * nsIFilePicker
 *
 * @see https://searchfox.org/mozilla-central/source/widget/nsIFilePicker.idl
 */
export interface nsIFilePicker {

    filterAll: 0x001;       // *.*
    filterHTML: 0x002;      // *.html; *.htm

    readonly file: nsIFile;
}