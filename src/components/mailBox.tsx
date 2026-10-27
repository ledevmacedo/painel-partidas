import { InboxArchiveBoldIcon, InboxBoldDuotoneIcon } from "@solar-icons/react"
import { InboxUnreadIcon } from "@solar-icons/react/bold-duotone"


interface Message {
    id: string
    text: string
}

interface MailboxProps {
    unreadMessages: Message[]
}

export default function Mailbox({ unreadMessages }: MailboxProps) {
    return (
        <section className="flex items-center gap-3 border p-4">
            {/* <InboxArchiveBoldIcon /> */}
            {unreadMessages.length <= 0 ?
                <InboxBoldDuotoneIcon size={20} className="text-stone-500" />
                :
                <InboxUnreadIcon className="text-green-500" size={20} />
            }

            <div>
                <h2>Caixa de correio</h2>
                {unreadMessages.length > 0 && (
                    <p>Tens {unreadMessages.length} mensagens por ler.</p>
                )}
            </div>
        </section>
    )
}