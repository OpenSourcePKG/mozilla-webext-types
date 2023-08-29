/**
 * Callback which is called when a filepicker is shown and a result is returned.
 * @param {number} aResult - One of returnOK, returnCancel, or returnReplace
 * @see https://searchfox.org/mozilla-central/source/widget/nsIFilePicker.idl
 */
export type nsIFilePickerShownCallback = (aResult: number) => void;