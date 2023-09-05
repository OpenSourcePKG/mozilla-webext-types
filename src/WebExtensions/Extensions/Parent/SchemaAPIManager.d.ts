/**
 * @see https://searchfox.org/comm-central/source/mozilla/toolkit/components/extensions/ExtensionCommon.sys.mjs#1442
 */
export interface SchemaAPIManager {

    processType: 'main' | 'addon' | 'content' | 'devtools';

    /**
     * @see https://searchfox.org/comm-central/source/mozilla/toolkit/components/extensions/ExtensionCommon.sys.mjs#1836
     */
    global: {
        AppConstants: any;
        Cc: any;
        ChromeWorker: any;
        Ci: any;
        Cr: any;
        Cu: any;
        ExtensionAPI: any;
        ExtensionAPIPersistent: any;
        ExtensionCommon: any;
        IOUtils: any;
        MatchGlob: any;
        MatchPattern: any;
        MatchPatternSet: any;
        PathUtils: any;
        Services: any;
        StructuredCloneHolder: any;
        WebExtensionPolicy: any;
        XPCOMUtils: any;
        extensions: SchemaAPIManager;
        global: any;
        ExtensionUtils: any;
    } | any;
}