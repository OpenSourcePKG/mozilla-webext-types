/**
 * TEvent
 */
export interface TEvent<EventListener> {
    addListener(listener: EventListener): any;
    removeListener(listener: EventListener): any;
    hasListener(listener: EventListener): any;
}