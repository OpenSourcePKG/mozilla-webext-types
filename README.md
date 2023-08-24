# mozilla-webext-types
Type definitions for the WebExtensions API used by Firefox and Thunderbird.

We started this project since we didn't find any proper type definitions and most plugin projects write their own.,
For now, the focus lies on supporting version 115 of Thunderbird and Firefox ESR. 
This is a work in progress so if any parts are missing, just let us know.

# Documentation
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions
* https://firefox-source-docs.mozilla.org/toolkit/components/extensions/webextensions/reference.html#extensionapi-class
* https://webextension-api.thunderbird.net/en/stable/index.html

# Install
TODO

# Usage
```typescript
declare const browser: TBrowser;

(async(): Promise<void> => {
    browser.messageDisplay.onMessageDisplayed.addListener((
        tab,
        message
    ) => {
        // ... your code
    });
})();
```

```typescript
declare const Components;
const {classes: Cc, interfaces: Ci, utils: Cu} = Components;

const {ExtensionCommon} = Cu.import('resource://gre/modules/ExtensionCommon.jsm');

export default class implements1 extends ExtensionCommon.ExtensionAPI {

    public getAPI(context: BaseContext<ExtensionMail>): any {
        const realFolder = context.extension.folderManager.get('1', '/');
        const folder = context.extension.folderManager.convert(realFolder);
        console.log(folder.path);
    }

}
```