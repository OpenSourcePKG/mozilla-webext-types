import {I18n} from './I18n/I18n';
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
     * @member {Storage}
     */
    storage: Storage;
}