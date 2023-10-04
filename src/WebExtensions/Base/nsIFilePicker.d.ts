import {nsIFile} from './nsIFile';
import {mozIDOMWindowProxy} from './mozIDOMWindowProxy';
import {nsIFilePickerShownCallback} from './nsIFilePickerShownCallback';

/**
 * @see https://searchfox.org/mozilla-central/source/widget/nsIFilePicker.idl
 */
export interface nsIFilePicker {

    // Load a file or directory
    modeOpen: 0;
    // Save a file or directory
    modeSave: 1;
    // Select a folder/directory
    modeGetFolder: 2;
    // Load multiple files
    modeOpenMultiple: 3;

    // User hit Ok, process selection
    returnOK: 0;
    // User hit cancel, ignore selection
    returnCancel: 1;
    // User acknowledged file already exists so ok to replace, process selection
    returnReplace: 2;

    // *.*
    filterAll: 0x001;
    // *.html; *.htm
    filterHTML: 0x002;
    // *.txt
    filterText: 0x004;

    /*
     * *.jpe; *.jpg; *.jpeg; *.gif;
     * *.png; *.bmp; *.ico; *.svg;
     * *.svgz; *.tif; *.tiff; *.ai;
     * *.drw; *.pct; *.psp; *.xcf;
     * *.psd; *.raw; *.webp
     */
    filterImages: 0x008;
    // *.xml
    filterXML: 0x010;
    // *.xul
    filterXUL: 0x020;
    // Applications (per-platform implementation)
    filterApps: 0x040;

    /**
     * Initialize the file picker widget.
     * The file picker is not valid until this method is called.
     * @param {mozIDOMWindowProxy} parent - 'mozIDOMWindow' parent.
     * This dialog will be dependent on this parent.
     * Parent must be non-null.
     * @param {string} title - The title for the file widget.
     * @param {number} mode - 'load', 'save', or 'get' folder.
     */
    init(parent: mozIDOMWindowProxy, title: string, mode: number): void;

    /**
     * Set the directory that the file open/save dialog initially displays
     * Note that, if displaySpecialDirectory has been already set, this value will be ignored.
     * @member {nsIFile}
     */
    displayDirectory: nsIFile;

    /**
     * Get the nsIFile for the file or directory. A different file object may be returned by each invocation. Returns the file currently selected.
     * @member {nsIFile}
     */
    readonly file: nsIFile;

    /**
     * Opens the file dialog asynchrounously. The passed in object's done method will be called upon completion.
     * @param aFilePickerShownCallback
     */
    open(aFilePickerShownCallback: nsIFilePickerShownCallback): void;
}