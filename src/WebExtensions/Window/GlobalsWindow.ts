import {BrowsingContext} from '../Base/BrowsingContext';

export declare interface GlobalsWindow extends Window {

    browsingContext?: BrowsingContext;

    openDialog(url: string, name: string, features: string, ...args): GlobalsWindow;
}