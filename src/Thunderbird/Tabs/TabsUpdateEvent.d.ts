import {UpdateFilter} from './UpdateFilter';

/**
 * TabsUpdateEvent
 *
 * @see https://webextension-api.thunderbird.net/en/115/tabs.html#onupdated
 */
export interface TabsUpdateEvent<EventListener> {

    /**
     * addListener
     * @param listener A function that will be called when this event occurs.
     * @param filter A set of filters that restricts the events that will be sent to this listener.
     */
    addListener(

        /**
         * listener
         * A function that will be called when this event occurs.
         */
        listener: EventListener,

        /**
         * filter
         * A set of filters that restricts the events that will be sent to this listener.
         */
        filter?: UpdateFilter

        ): any;

    removeListener(listener: EventListener): any;
    hasListener(listener: EventListener): any;
}