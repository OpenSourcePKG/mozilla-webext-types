import {Local} from './Local';

/**
 * Enables extensions to store and retrieve data, and listen for changes to stored items.
 *
 * The storage system is based on the Web Storage API, with a few differences. Among other differences, these include:
 * - It's asynchronous.
 * - Values are scoped to the extension, not to a specific domain (i.e. the same set of key/value pairs are
 * available to all scripts in the background context and content scripts).
 * - The values stored can be any JSON-ifiable value, not just String. Among other things, this includes:
 * Array and Object, but only when their contents can be represented as JSON, which does not include DOM nodes.
 * You don't need to convert your values to JSON Strings prior to storing them, but they are represented as JSON
 * internally, thus the requirement that they be JSON-ifiable.
 * - Multiple key/value pairs can be set or retrieved in the same API call.
 *
 * To use this API you need to include the "storage" permission in your manifest.json file.
 *
 * Each extension has its own storage area, which can be split into different types of storage.
 *
 * Although this API is similar to Window.localStorage it is recommended that you don't use Window.localStorage in
 * the extension code to store extension-related data. Firefox will clear data stored by extensions using the
 * localStorage API in various scenarios where users clear their browsing history and data for privacy reasons, while
 * data saved using the storage.local API will be correctly persisted in these scenarios.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage
 */
export declare interface Storage {

    local: Local;
}