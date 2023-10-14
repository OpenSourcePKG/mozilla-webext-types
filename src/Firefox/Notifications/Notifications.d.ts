import {TEvent} from '../../Thunderbird/TEvent';
import {NotificationOptions} from './NotificationOptions';

/**
 * Display notifications to the user, using the underlying operating system's notification mechanism.
 * Because this API uses the operating system's notification mechanism, the details of how notifications appear
 * and behave may differ according to the operating system and the user's settings.
 *
 * To use this API you need to have the "notifications" permission.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications
 */
export declare interface Notifications {

    /**
     * Clears a notification, given its ID.
     * This is an asynchronous function that returns a Promise.
     * @param {string} id - The ID of the notification to clear. This is the same as the ID passed into
     * notifications.create()'s callback.
     * @returns {boolean}
     */
    clear(id: string): Promise<boolean>;

    /**
     * Create and display a new notification.
     * @param {string} id - This is used to refer to this notification in notifications.update(), notifications.clear(),
     * and event listeners. If you omit this argument or pass an empty string, then a new ID will be generated for this
     * notification. If the ID you provide matches the ID of an existing notification from this extension, then the
     * other notification will be cleared.
     * @param {NotificationOptions} options - Defines the notification's content and behavior.
     * @returns {string}
     */
    create(id: string|null, options: NotificationOptions): Promise<string>;

    /**
     * Gets all currently active notifications created by the extension.
     * @returns {object} A Promise that will be fulfilled with an object. Each currently active notification is a
     * property of this object: the name of the property is the ID of the notification, and the value of the property
     * is a notifications.NotificationOptions object describing that notification.
     */
    getAll(): Promise<object>;

    /**
     * Updates a notification, given its ID.
     * @param {string} id - The ID of the notification to update. This is the same as the ID passed into
     * notifications.create()'s callback.
     * @param {NotificationOptions} options - Defines the notification's new content and behavior.
     * @returns {boolean} A Promise that will be fulfilled with a boolean: true if the notification was updated,
     * or false if it was not (for example, because the notification referenced by id did not exist).
     */
    update(id: string, options: NotificationOptions): Promise<boolean>;

    /**
     * Fired when the user clicks one of the notification's buttons.
     */
    onButtonClicked: TEvent<(

        /**
         * ID of the notification whose button was clicked.
         * @member {string}
         */
        notificationId: string,

        /**
         * The zero-based index of the button that was clicked.
         * @member {number}
         */
        buttonIndex: number

    ) => void>;

    /**
     * Fired when the user clicks a notification, but not on any of the notification's buttons
     * (for that, see notifications.onButtonClicked).
     */
    onClicked: TEvent<(

        /**
         * ID of the notification that the user clicked.
         * @member {string}
         */
        notificationId: string

    ) => void>;

    /**
     * Fired when a notification is closed, either by the system or by the user.
     */
    onClosed: TEvent<(

        /**
         * ID of the notification that closed.
         * @member {string}
         */
        notificationId: string,

        /**
         * True if the notification was closed by the user, or false if it was closed by the system.
         * This argument is not supported in Firefox.
         * @member {boolean}
         */
        byUser?: boolean

    ) => void>;

    /**
     * Fired immediately after a notification has been shown.
     */
    onShown: TEvent<(

        /**
         * ID of the notification that has been shown.
         * @member {string}
         */
        notificationId: string

    ) => void>;
}