/**
 * RegisteredComposeScript
 * An object that represents a compose script registered programmatically
 *
 * @see https://webextension-api.thunderbird.net/en/115/composeScripts.html#composescripts-registeredcomposescriptoptions
 */
export interface RegisteredComposeScript {

    /**
     * unregister
     * Unregister a compose script registered programmatically
     */
    unregister(): void;
}