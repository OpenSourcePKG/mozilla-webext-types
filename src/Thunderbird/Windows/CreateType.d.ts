/**
 * Specifies what type of window to create. Thunderbird does not support panel and detached_panel,
 * they are interpreted as popup.
 * @see https://webextension-api.thunderbird.net/en/latest/windows.html#windows-createtype
 */
export type CreateType = 'normal' | 'popup' | 'panel' | 'detached_panel';