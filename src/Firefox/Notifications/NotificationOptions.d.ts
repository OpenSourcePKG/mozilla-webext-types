/**
 * This type contains all the data needed to:
 * - create a notification using notifications.create(),
 * - update an existing notification using notifications.update().
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
 */
export declare interface NotificationOptions {

    /**
     * The type of notification you want. Depending on your choice here, certain other properties are either
     * mandatory or are not permitted.
     * @member {string}
     */
    type: 'basic' | 'image' | 'list' | 'progress';

    /**
     * The notification's main content.
     * @member {string}
     */
    message: string;

    /**
     * The notification's title.
     * @member {string}
     */
    title: string;

    /**
     * A URL pointing to an icon to display in the notification. The URL can be: a data URL, a blob URL, a http or
     * https URL, or the relative URL of a file within the extension. When using an SVG image, ensure that the image
     * includes height and width attributes, for example, <svg width="96" height="96"….
     * Otherwise, the image may not display.
     * @member {string}
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions#iconurl
     */
    iconUrl?: string;

    /**
     * Supplementary content to display.
     * @member {string}
     */
    contextMessage?: string;

    /**
     * The notification's priority: may be 0, 1, or 2. Defaults to 0 if omitted.
     * @member {number}
     */
    priority?: number;

    /**
     * A timestamp for the notification in milliseconds since the epoch.
     * @member {number}
     */
    eventTime?: number;

    /**
     * An array of up to 2 buttons to include in the notification.
     * You can listen for button clicks using notifications.onButtonClicked.
     * @member {object[]}
     */
    buttons?: {

        /**
         * Title for the button.
         * @member {string}
         */
        title: string;

        /**
         * URL pointing to an icon for the button.
         * @member {string}
         */
        iconUrl?: string;
    }[];

    /**
     * A URL pointing to an image to use in the notification. The URL can be: a data URL, a blob URL, or the relative
     * URL of a file within the extension. When using an SVG image, ensure that the image includes height and width
     * attributes, for example, <svg width="96" height="96"…. Otherwise, the image may not display.
     *
     * This property is only permitted if type is "image". In this case, it is mandatory if the NotificationOptions is
     * used in notifications.create(), and optional if it is used in notifications.update().
     * @member {string}
     */
    imageUrl?: string;

    /**
     * An array of items to include in the notification. Depending on the settings for the operating system's
     * notification mechanism, some of the items you provide might not be displayed.
     * @member {object[]}
     */
    items?: {

        /**
         * Title to display in the item.
         * @member {string}
         */
        title: string;

        /**
         * Message to display in the item.
         * @member {string}
         */
        message: string;
    }[];

    /**
     * An integer between 0 and 100, used to represent the current progress in a progress indicator.
     */
    progress?: number;

}