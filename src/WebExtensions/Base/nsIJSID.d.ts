// eslint-disable-next-line @typescript-eslint/ban-types
export declare interface nsIJSID extends Function {
    name: string;
    number: string;
    valid: boolean;

    equals(other: nsIJSID): boolean;
    initialize(idString: string): void;
    toString(): string;
}