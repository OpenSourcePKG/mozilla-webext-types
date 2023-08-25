import {LanguageCode} from './LanguageCode';

/**
 * Functions to internationalize your extension. You can use these APIs to get localized strings from locale
 * files packaged with your extension, find out the browser's current language, and find out the value
 * of its Accept-Language header.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n
 */
export interface I18n {

    /**
     * Gets the accept-languages of the browser. This is different from the locale used by the browser.
     * To get the locale, use i18n.getUILanguage.
     *
     * This is an asynchronous function that returns a Promise.
     *
     * See the Internationalization page for a guide on using this function.
     * @returns {Promise<LanguageCode[]>} A Promise that will be fulfilled with an array of i18n.LanguageCode objects.
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages
     */
    getAcceptLanguages(): Promise<LanguageCode[]>;

    /**
     * Gets the localized string for the specified message.
     *
     * See the Internationalization page for a guide on using this function.
     * @param {string} messageName - The name of the message, as specified in the messages.json file. If the
     * message can't be found in messages.json:
     * - Firefox returns "" and logs an error.
     * - Chrome returns "" and does not log an error.
     * @param {any} substitutions - String or array of string. A single substitution string, or an array of substitution strings.
     * In Chrome, if you supply more than 9 substitution strings, getMessage() will return undefined.
     * @returns {string} Message localized for current locale.
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage
     */
    getMessage(
        messageName: string,
        substitutions?: any
    ): string;

    /**
     * Gets the UI language of the browser. This is different from i18n.getAcceptLanguages which returns the
     * preferred user languages.
     * @returns {string} The browser UI language code as an i18n.LanguageCode.
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage
     */
    getUILanguage(): string;

    /**
     * Detects the language of the provided text using the Compact Language Detector (CLD).
     *
     * This is an asynchronous function that returns a Promise.
     * @param {string} text - User input string to be translated.
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage
     */
    detectLanguage(text: string): Promise<{

        /**
         * Whether the language was detected reliably.
         * @member {boolean}
         */
        isReliable: boolean;

        /**
         * Array of objects, each of which has two properties.
         * @member {object}
         */
        languages: {

            /**
             * The detected language.
             * @member {LanguageCode}
             */
            language: LanguageCode;

            /**
             * The percentage of the input string that was in the detected language.
             * @member {number}
             */
            percentage: number;
        }[];
    }>;
}