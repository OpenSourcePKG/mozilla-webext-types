/**
 * PathUtils is a set of utilities for operating on absolute paths.
 * @see https://github.com/lieser/dkim_verifier/blob/0bf905c59287584bdc95d8bee54aaeab063360a9/experiments/mozilla.d.ts#L181
 * @see https://searchfox.org/mozilla-central/source/dom/chrome-webidl/PathUtils.webidl
 */
export declare interface PathUtils {

    /**
     * Return the last path component.
     * @param {string} path - An absolute path.
     * @returns {string} The last path component.
     */
    filename(path: string);

    /**
     * Join the given components into a full path.
     * @param {string[]} components - The path components. The first component must be an absolute path.
     * There must be at least one component.
     * @returns {string}
     */
    join(...components: string[]): string;

}