/**
 * nsIMsgIncomingServer
 */
export interface nsIMsgIncomingServer {

    /**
     * getCharValue
     * @param attr
     */
    getCharValue(attr: string): string;

    /**
     * getIntValue
     * @param attr
     */
    getIntValue(attr: string): number;
}