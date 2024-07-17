/**
 * Browsing Context
 */
export interface BrowsingContext {

    /**
     * A unique identifier for the browser element that is hosting this
     * BrowsingContext tree. Every BrowsingContext in the element's tree will
     * return the same ID in all processes and it will remain stable regardless of
     * process changes. When a browser element's frameloader is switched to
     * another browser element this ID will remain the same but hosted under the
     * under the new browser element.
     * We are using this identifier for getting the active tab ID and passing to
     * the profiler back-end. See `getActiveBrowserID` for the usage.
     */
    browserId: number;

}