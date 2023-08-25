/**
 * nsIFilePickerShownCallback
 *
 * @see https://searchfox.org/mozilla-central/source/widget/nsIFilePicker.idl
 */
export interface nsIFilePickerShownCallback {

    /**
     * done
     * Callback which is called when a filepicker is shown and a result is returned.
     *
     * @param aResult One of returnOK, returnCancel, or returnReplace
     */
    done(aResult: number): void;
}