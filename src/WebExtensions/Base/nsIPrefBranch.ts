/**
 * nsIPrefBranch
 */
export interface nsIPrefBranch {

    /**
     * getBoolPref
     * @param name
     * @param defaultValue
     */
    getBoolPref(name: string, defaultValue: boolean | undefined): boolean;

    /**
     * getCharPref
     */
    getCharPref(name: string, defaultValue: string | undefined): string;

    /**
     * getChildList
     * @param startingAt
     * @param obj
     */
    getChildList(startingAt: string, obj: Record<string, unknown>): string[];

    /**
     * setBoolPref
     * @param name
     * @param value
     */
    setBoolPref(name: string, value: boolean): void;
}