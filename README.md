# mozilla-webext-types
Types description of Firefox and Thunderbird WebExtension.


Since we didn't find any types that were properly described and all projects do their own part. 
We have now started this project for the stable version 115 Thunderbird. 
If API parts are missing please just let us know.

# Documentation
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions
* https://firefox-source-docs.mozilla.org/toolkit/components/extensions/webextensions/reference.html#extensionapi-class
* https://webextension-api.thunderbird.net/en/stable/index.html

# Install
TODO

# Used sample
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