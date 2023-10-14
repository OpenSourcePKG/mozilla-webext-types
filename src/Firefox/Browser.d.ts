import {I18n} from './I18n/I18n';
import {Notifications} from './Notifications/Notifications';
import {Runtime} from './Runtime/Runtime';
import {Storage} from './Storage/Storage';

/**
 * @see https://webextension-api.thunderbird.net/en/stable/index.html
 */
export interface Browser {

    /**
     * Functions to internationalize an extension. It can be used to get localized strings from locale files
     * packaged with an extension and to find out Thunderbird’s current language.
     * @member {I18n}
     */
    i18n: I18n;

    /**
     * Display notifications to the user, using the underlying operating system’s notification mechanism.
     * @member {Notifications}
     */
    notifications: Notifications;

    /**
     * This module provides information about the extension and the environment it’s running in. It also provides
     * messaging APIs to communicate between different parts of the extension, communicate with other extensions and
     * communicate with native applications.
     * @member {Runtime}
     */
    runtime: Runtime;

    /**
     * Enables extensions to store and retrieve data, and listen for changes to stored items.
     * @member {Storage}
     */
    storage: Storage;
}