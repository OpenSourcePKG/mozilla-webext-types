/**
 * nsIEnvironment
 */
export interface nsIEnvironment {

    /**
     * get
     * @param envName
     */
    get(envName: string): string;

    /**
     * set
     * @param envName
     * @param value
     */
    set(envName: string, value: string): void;

    /**
     * exists
     * @param aName
     */
    exists(aName: string): boolean;
}