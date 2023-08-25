import {nsIFile} from './nsIFile';

/**
 * nsIFilePicker
 *
 * @see https://searchfox.org/mozilla-central/source/widget/nsIFilePicker.idl
 */
export interface nsIFilePicker {

    // *.*
    filterAll: 0x001;
    // *.html; *.htm
    filterHTML: 0x002;

    readonly file: nsIFile;
}