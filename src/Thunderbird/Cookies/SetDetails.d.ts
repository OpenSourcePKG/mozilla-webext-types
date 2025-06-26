import {PartitionKey} from './PartitionKey';

export type SetDetails = {
    url: string;
    domain?: string;
    expirationDate?: number;
    firstPartyDomain?: string;
    httpOnly?: boolean;
    name?: string;
    partitionKey?: PartitionKey;
    path?: string;
    sameSite?: any;
    secure?: boolean;
    storeId?: string;
    value?: string;
};