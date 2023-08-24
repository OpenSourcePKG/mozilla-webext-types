import {LanguageCode} from './LanguageCode';

/**
 * I18n
 *
 * Functions to internationalize your extension. You can use these APIs to get localized strings from locale
 * files packaged with your extension, find out the browser's current language, and find out the value
 * of its Accept-Language header.
 *
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n
 */
export interface I18n {

    /**
     * getAcceptLanguages
     * Gets the accept-languages of the browser. This is different from the locale used by the browser.
     * To get the locale, use i18n.getUILanguage.
     *
     * This is an asynchronous function that returns a Promise.
     *
     * See the Internationalization page for a guide on using this function.
     *
     * @return A Promise that will be fulfilled with an array of i18n.LanguageCode objects.
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages
     */
    getAcceptLanguages(): Promise<LanguageCode[]>;

    /**
     * getMessage
     * Gets the localized string for the specified message.
     *
     * See the Internationalization page for a guide on using this function.
     *
     * @param messageName The name of the message, as specified in the messages.json file. If the
     * message can't be found in messages.json:
     * - Firefox returns "" and logs an error.
     * - Chrome returns "" and does not log an error.
     * @param substitutions string or array of string. A single substitution string, or an array of substitution strings.
     * In Chrome, if you supply more than 9 substitution strings, getMessage() will return undefined.
     * @return string. Message localized for current locale.
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage
     */
    getMessage(messageName: string, substitutions?: any): string;

    /**
     * getUILanguage
     * Gets the UI language of the browser. This is different from i18n.getAcceptLanguages which returns the
     * preferred user languages.
     *
     * @return The browser UI language code as an i18n.LanguageCode.
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage
     */
    getUILanguage(): string;

    /**
     * detectLanguage
     * Detects the language of the provided text using the Compact Language Detector (CLD).
     *
     * This is an asynchronous function that returns a Promise.
     *
     * @param text User input string to be translated.
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage
     */
    detectLanguage(text: string): Promise<{

        /**
         * isReliable
         * Whether the language was detected reliably.
         */
        isReliable: boolean;

        /**
         * languages
         * array of objects, each of which has two properties:
         */
        languages: {

            /**
             * language
             * The detected language.
             */
            language: LanguageCode;

            /**
             * percentage
             * The percentage of the input string that was in the detected language.
             */
            percentage: number;
        }[];
    }>;
}