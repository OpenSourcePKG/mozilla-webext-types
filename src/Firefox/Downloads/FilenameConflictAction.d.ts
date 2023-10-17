/**
 * The FilenameConflictAction type of the downloads API specifies what to do if the name of a
 * downloaded file conflicts with an existing file.
 *
 * This type defines the values that can be used for the conflictAction property of the
 * downloads.download function's options parameter.
 */
export declare type FilenameConflictAction =
    // The browser will modify the filename to make it unique.
    'uniquify' |
    // The browser will overwrite the old file with the newly-downloaded file.
    'overwrite' |
    // The browser will prompt the user, asking them to choose whether to uniquify or overwrite.
    'prompt';