/**
 * A Port object represents one end of a connection between two specific contexts, which can be used to exchange messages.
 *
 * One side initiates the connection, using a connect() API. This returns a Port object. The other side listens for
 * connection attempts using an onConnect listener. This is passed a corresponding Port object.
 *
 * Once both sides have Port objects, they can exchange messages using Port.postMessage() and Port.onMessage.
 * When they are finished, either end can disconnect using Port.disconnect(), which will generate a Port.onDisconnect
 * event at the other end, enabling the other end to do any cleanup required.
 *
 * A Port can also become disconnected in response to various events. See Lifecycle.
 *
 * You can use this pattern to communicate between:
 * - different parts of your extension (for example, between content scripts and background scripts)
 * - between your extension and a native application running on the user's computer.
 * - between your extension and a different extension
 *
 * You need to use different connection APIs for different sorts of connections, as detailed in the table below.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port
 */
export interface Port {

    /**
     * The port's name, defined in the runtime.connect() or tabs.connect() call that created it.
     * If this port is connected to a native application, its name is the name of the native application.
     * @member {string}
     */
    name: string;

    /**
     * Disconnects a port. Either end can call this when they have finished with the port.
     * It will cause onDisconnect to be fired at the other end. This is useful if the other end is maintaining some
     * state relating to this port, which can be cleaned up on disconnect. If this port is connected to a native
     * application, this function will close the native application.
     * @member {Function}
     */
    disconnect: () => void;

    /**
     * If the port was disconnected due to an error, this will be set to an object with a string property message,
     * giving you more information about the error. See onDisconnect.
     * @member {Error}
     */
    error: Error;
}