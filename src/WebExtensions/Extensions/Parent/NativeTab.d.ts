
export interface NativeTabObj {
    readonly chromeBrowser?: HTMLIFrameElement;
    document: any;
}

/**
 * @see https://github.com/lieser/dkim_verifier/blob/3e251565091cd3dcbcbb90a863a3f968fdb7259e/experiments/mozilla.d.ts#L102
 */
export type NativeTab = NativeTabObj | Window;