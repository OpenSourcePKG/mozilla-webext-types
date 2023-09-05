import {ExtensionData} from './../ExtensionData';
import {NativeTab} from './NativeTab';
import {TabManager} from './TabManager';

/**
 * A platform-independent base class for extension-specific wrappers around native tab objects.
 * @see https://searchfox.org/comm-central/source/mozilla/toolkit/components/extensions/parent/ext-tabs-base.js#59
 */
export class TabBase {

    public extension: ExtensionData;
    public tabManager: TabManager;
    public id: number;
    public nativeTab: NativeTab;

    constructor(extension: ExtensionData, nativeTab: NativeTab, id: number);

}