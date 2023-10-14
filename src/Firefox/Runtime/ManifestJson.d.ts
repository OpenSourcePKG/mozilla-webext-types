/**
 * The manifest.json file is the only file that every extension using WebExtension APIs must contain.
 *
 * Using manifest.json, you specify basic metadata about your extension such as the name and version, and can also
 * specify aspects of your extension's functionality (such as background scripts, content scripts, and browser actions).
 *
 * It is a JSON-formatted file, with one exception: it is allowed to contain "//"-style comments.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json
 */
export declare interface ManifestJson {

    /**
     * An action is a button that your extension adds to the browser's toolbar. The button has an icon, and may
     * optionally have a popup whose content is specified using HTML, CSS, and JavaScript.
     *
     * This key replaces browser_action in Manifest V3 extensions.
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action
     */
    action?: {

        /**
         * Do not set browser_style to true: its support in Manifest V3 was removed in Firefox 118.
         * See Manifest V3 migration for browser_style.
         * Optional, defaulting to false.
         * @member {boolean}
         */
        browser_style?: boolean;

        /**
         * Defines the part of the browser in which the button is initially placed.
         * @member {string}
         * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action
         */
        default_area?: string;

        /**
         * Use this to specify one or more icons for the action. The icon is shown in the browser toolbar by default.
         * @member {object|string}
         * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action
         */
        default_icon?: {
            16?: string;
            32?: string;
        } | string;

        /**
         * The path to an HTML file containing the specification of the popup.
         * @member {string}
         */
        default_popup?: string;

        /**
         * Tooltip for the button, displayed when the user moves their mouse over it.
         * If the button is added to the browser's menu panel, this is also shown under the app icon.
         * @member {string}
         */
        default_title?: string;

        /**
         * This property enables you to specify different icons for themes depending on whether
         * Firefox detects that the theme uses dark or light text.
         * @member {object[]}
         * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action
         */
        theme_icons?: {
            light?: string;
            dark?: string;
            size?: number;
        }[];
    };

    /**
     * The extension's author, intended for display in the browser's user interface. If the developer key is
     * supplied and it contains the "name" property, it will override the author key. There's no way to specify
     * multiple authors.
     * @member {string}
     */
    author?: string;

    /**
     * Use the background key to include one or more background scripts or a background page in your extension.
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background
     */
    background?: {
        scripts?: string[];
        page?: string;
        persistent?: boolean;
        type?: string;
    };

    // TODO

    /**
     * The browser_specific_settings key contains keys that are specific to a particular host application.
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
     */
    browser_specific_settings: {
        gecko?: {
            id: string;
            strict_min_version: string;
            strict_max_version?: string;
            update_url?: string;
        };
        gecko_android?: {
            strict_min_version: string;
            strict_max_version?: string;
        };
        safari?: {
            strict_min_version: string;
            strict_max_version: string;
        };
    };

    // TODO

}