import {nsIFile} from './nsIFile';
import {mozIDOMWindowProxy} from './mozIDOMWindowProxy';
import {nsIFilePickerShownCallback} from './nsIFilePickerShownCallback';
import {nsISimpleEnumerator} from './nsISimpleEnumerator';
import {nsISupports} from './nsISupports';
import {nsIURI} from './nsIURI';

/**
 * @see https://searchfox.org/mozilla-central/source/widget/nsIFilePicker.idl
 */
export interface nsIFilePicker extends nsISupports {

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
    // User-acknowledged file already exists so ok to replace, process selection
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
    // Allow URLs
    filterAllowURLs: 0x080;

    /**
     * .aac; *.aif; *.flac; *.iff;
     * .m4a; *.m4b; *.mid; *.midi;
     * .mp3; *.mpa; *.mpc; *.oga;
     * .ogg; *.ra; *.ram; *.snd;
     * .wav; *.wma.
     */
    filterAudio: 0x100;

    /**
     * *.avi; *.divx; *.flv; *.m4v;
     * *.mkv; *.mov; *.mp4; *.mpeg;
     * *.mpg; *.ogm; *.ogv; *.ogx;
     * *.rm; *.rmvb; *.smil; *.webm;
     * *.wmv; *.xvid
     */
    filterVideo: 0x200;

    /**
     * *.pdf;
     */
    filterPDF: 0x400;

    // No capture target specified.
    captureNone: 0;
    // Missing/invalid value default.
    captureDefault: 1;
    // "user" capture target specified.
    captureUser: 2;
    // "environment" capture target specified.
    captureEnv: 3;

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
     * The filter which is currently selected in the File Picker dialog.
     * @member {number} Returns the index (0 based) of the selected filter in the filter list.
     */
    filterIndex: number;

    /**
     * Set the directory that the file open/save dialog initially displays
     * Note that, if displaySpecialDirectory has been already set, this value will be ignored.
     * @member {nsIFile}
     */
    displayDirectory: nsIFile;

    /**
     * Set the directory that the file open/save dialog initially displays using
     * one of the special name as such as 'Desk', 'TmpD', and so on.
     * Note that, if displayDirectory has been already set, this value will be
     * ignored.
     * @member {string} The name of the special directory.
     */
    displaySpecialDirectory: string;

    /**
     * Get the nsIFile for the file or directory. A different file object may be returned by each invocation. Returns the file currently selected.
     * @member {nsIFile}
     */
    readonly file: nsIFile;

    /**
     * Get the nsIURI for the file or directory.
     * @member {nsIURI} Returns the file currently selected
     */
    readonly fileURL: nsIURI;

    /**
     * Get the enumerator for the selected files only works in the modeOpenMultiple mode.
     * @member {nsISimpleEnumerator<nsIFile>} Returns the files currently selected
     */
    readonly files: nsISimpleEnumerator<nsIFile>;

    /**
     * Get the DOM File or the DOM Directory.
     * @member {nsISupports} Returns the file or directory currently selected DOM object.
     */
    readonly domFileOrDirectory: nsISupports;

    /**
     * Get the enumerator for the selected files or directories only works in the modeOpenMultiple mode.
     * @member {nsISimpleEnumerator<nsISupports>} Returns the files/directories currently selected as DOM object.
     */
    readonly domFileOrDirectoryEnumerator: nsISimpleEnumerator<nsISupports>;

    /**
     * Controls whether the chosen file(s) should be added to the system's recent
     * documents list. This attribute will be ignored if the system has no "Recent
     * Docs" concept, or if the application is in private browsing mode (in which
     * case the file will not be added). Defaults to true.
     */
    addToRecentDocs: boolean;

    /**
     * Opens the file dialog asynchrounously. The passed in object's done method will be called upon completion.
     * @param aFilePickerShownCallback
     */
    open(aFilePickerShownCallback: nsIFilePickerShownCallback): void;

    /**
     * The picker's mode, as set by the 'mode' argument passed to init()
     * (one of the modeOpen et. Al. Constants specified above).
     * @member {number}
     */
    mode: number;

    /**
     * If set to non-empty string, the nsIFilePicker implementation
     * may use okButtonLabel as the label for the button the user uses to accept file selection.
     */
    okButtonLabel: string;

    /**
     * Implementation of HTMLInputElement's `capture` property.
     * Not used by Firefox Desktop.
     * @member {number}
     */
    capture: number;

}