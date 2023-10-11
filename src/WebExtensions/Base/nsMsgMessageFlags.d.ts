import {nsISupports} from './nsISupports';

/**
 * Flags about a single message.
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsMsgMessageFlags.idl
 */
export declare interface nsMsgMessageFlags extends nsISupports {

    /**
     * This message has been read.
     */
    Read: 0x00000001;

    /**
     * A reply to this message has been successfully sent.
     */
    Replied: 0x00000002;

    /**
     * This message has been flagged.
     */
    Marked: 0x00000004;

    /**
     * This message has already gone, but the folder hasn't been compacted yet.
     * Since actually removing a message from a folder is a semi-expensive
     * operation, we tend to delay it; messages with this bit set will be removed
     * the next time folder compaction is done.  Once this bit is set, it never
     * gets un-set.
     */
    Expunged: 0x00000008;

    /**
     * The subject of this message has "Re:" on the front. The folder summary
     * uniquifies all of the strings in it, and to help this, any string which
     * begins with "Re:" has that stripped first.  This bit is then set, so that
     * when presenting the message, we know to put it back (since the "Re:" is
     * not itself stored in the file.).
     */
    HasRe: 0x00000010;

    /**
     * The children of this sub-thread are folded in the display.
     */
    Elided: 0x00000020;

    /**
     * The message is a feed, originally downloaded in a server.type=rss account.
     */
    FeedMsg: 0x00000040;

    /**
     * This news article or IMAP message is present in the disk cache.
     */
    Offline: 0x00000080;

    /**
     * This thread is being watched.
     */
    Watched: 0x00000100;

    /**
     * This message's sender has been authenticated when sending this message.
     */
    SenderAuthed: 0x00000200;

    /**
     * This message's body is only the first ten or so of the message, and we
     * need to add a link to let the user download the rest of it from the POP
     * server.
     */
    Partial: 0x00000400;

    /**
     * This message is queued for delivery.  This only ever gets set on messages
     * in the queue folder, but is used to protect against the case of other
     * messages having made their way in there somehow -- if some other program
     * put a message in the queue, we don't want to later deliver it!
     */
    Queued: 0x00000800;

    /**
     * This message has been forwarded.
     */
    Forwarded: 0x00001000;

    /**
     * This message has been redirected.
     */
    Redirected: 0x00002000;

    /**
     * These are used to remember the message priority in the mozilla status
     * flags, so we can regenerate a priority after a rule (or user) has changed
     * it. They are not returned in MSG_MessageLine.flags, just in mozilla-status,
     * so if you need more non-persistent flags, you could share these bits. But
     * it would be wrong.
     */
    Priorities: 0x0000E000;

    /**
     * This message is new since the last time the folder was closed.
     */
    New: 0x00010000;

    /**
     * This thread has been ignored.
     */
    Ignored: 0x00040000;

    /**
     * This IMAP message has been marked deleted on the server.
     */
    IMAPDeleted: 0x00200000;

    /**
     * This message has requested to send a message delivery notification to its sender.
     */
    MDNReportNeeded: 0x00400000;

    /**
     * A message delivery notification has been sent for this message. No more reports should be sent.
     */
    MDNReportSent: 0x00800000;

    /**
     * This message is a template.
     */
    Template: 0x01000000;

    /**
     * This message has files attached to it.
     */
    Attachment: 0x10000000;

    /**
     * These are used to remember the message labels in the mozilla status2
     * flags. So we can regenerate a priority after a  rule (or user) has changed
     * it. They are not returned in nsMsgHdr.flags, just in mozilla-status2, so
     * if you need more non-persistent flags, you could share these bits. But it
     * would be wrong.
     */
    Labels: 0x0E000000;
}