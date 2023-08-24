/**
 * WindowType
 * The type of a window. Under some circumstances a Window may not be assigned a type property.
 *
 * @see https://webextension-api.thunderbird.net/en/115/tabs.html#tabs-windowtype
 */
export type WindowType = 'normal' | 'popup' | 'panel' | 'app' | 'devtools' | 'messageCompose' | 'messageDisplay';