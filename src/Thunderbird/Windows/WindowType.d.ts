/**
 * The type of a window. Under some circumstances a window may not be assigned a type property.
 * @see https://webextension-api.thunderbird.net/en/latest/windows.html#windows-windowtype
 */
export type WindowType = 'normal' | 'popup' | 'messageCompose' | 'messageDisplay';