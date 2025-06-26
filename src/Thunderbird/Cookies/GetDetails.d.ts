import {PartitionKey} from './PartitionKey';

export type GetDetails = {
    name: string;
    url: string;
    firstPartyDomain?: string;
    partitionKey?: PartitionKey;
    storeId?: string;
};