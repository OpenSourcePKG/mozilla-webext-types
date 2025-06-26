import {PartitionKey} from './PartitionKey';

export type Cookie = {
    domain: string;
    firstPartyDomain: string;
    hostOnly: boolean;
    httpOnly: boolean;
    name: string;
    path: string;
    sameSite: any;
    secure: boolean;
    session: boolean;
    storeId: string;
    value: string;
    expirationDate?: number;
    partitionKey?: PartitionKey;
};