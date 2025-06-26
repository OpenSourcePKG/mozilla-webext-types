import {Cookie} from './Cookie';
import {GetDetails} from './GetDetails';
import {SetDetails} from './SetDetails';

export interface Cookies {

    get(details: GetDetails): Promise<Cookie|null>;

    set(details: SetDetails): Promise<Cookie|null>;
}