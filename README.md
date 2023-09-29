# mozilla-webext-types
Type definitions for the WebExtensions API used by Firefox and Thunderbird.

We started this project since we didn't find any proper type definitions and most plugin projects write their own.,
For now, the focus lies on supporting version 115 of Thunderbird and Firefox ESR. 
This is a work in progress, so if any parts are missing, just let us know.

# Documentation
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions
* https://firefox-source-docs.mozilla.org/toolkit/components/extensions/webextensions/reference.html#extensionapi-class
* https://webextension-api.thunderbird.net/en/stable/index.html

# Install
### npm
```shell
npm install -D 'OpenSourcePKG/mozilla-webext-types.git'
```

### yarn
```shell
yarn add -D 'OpenSourcePKG/mozilla-webext-types.git'
```

# Usage
Important: you need Webpack to convert the Typescript files correctly!

### Background area
```typescript
import {ThunderbirdBrowser} from 'mozilla-webext-types';

declare const browser: ThunderbirdBrowser;

(async(): Promise<void> => {
    browser.messageDisplay.onMessageDisplayed.addListener((
        tab,
        message
    ) => {
        // ... your code
    });
})();
```

### Experiment APIs
```typescript
import {
    Components as C,
    ExtensionMail,
    IExtensionAPI, nsIJSRAIIHelper, Services as S
} from 'mozilla-webext-types';

declare const Components: C;
declare const Services: S;
declare const ExtensionAPI: any;

const {
    classes: Cc,
    interfaces: Ci
} = Components;

// sample create service class
const {ExtensionCommon} = Cu.import('resource://gre/modules/ExtensionCommon.jsm');

/**
 * My own implementation
 * The trick is, the interface 'IExtensionAPI' gives the 'ExtensionAPI' its property description.
 * After webpack has created the javascript files, the structure is correct!
 */
export default class implementation extends ExtensionAPI implements IExtensionAPI<ExtensionMail> {

    /**
     * @member {ExtensionMail}
     */
    public extension: ExtensionMail;

    /**
     * Construct my implementation.
     * @param {ExtensionMail} ext
     */
    public constructor(ext: ExtensionMail) {
        super(ext);
        this.extension = ext;
    }

    /**
     * Start up the implementation.
     */
    public onStartup(): void {
        // ...
    }
    
    public getAPI(context: BaseContext<ExtensionMail>): Record<string, unknown> {
        // sample
        const realFolder = context.extension.folderManager.get('1', '/');
        const folder = context.extension.folderManager.convert(realFolder);
        console.log(folder.path);
        
        // ....
        
        return {
            myimple: {
                // sample for pickup -----------------------------------------------------------------------------------
                pickPath: async(): Promise<string|null> => {
                    console.log('pickPath');
                    const fp = Cc['@mozilla.org/filepicker;1'].createInstance(Ci.nsIFilePicker);

                    const recentWindow = Services.wm.getMostRecentWindow('');

                    fp.init(recentWindow, '', Ci.nsIFilePicker.modeGetFolder);

                    const res = await new Promise((resolve) => {
                        fp.open(resolve);
                    });

                    if (res === Ci.nsIFilePicker.returnOK) {
                        return fp.file.path;
                    }

                    return null;
                }
            }
        };
    }

}
```