import Panel from "./panel"
import UserAvatar from "./userAvatar"
import UserGreeting from "./userGreeting"

interface UserCardProps {
    user: User
    onSelect: (userId: string) => void
}

export default function UserCard({ user, onSelect }: UserCardProps) {
    return (
        <Panel title="Perfil">
            <div className="flex gap-2 items-center justify-center">
                <UserAvatar user={user} />
                <UserGreeting user={user} />
            </div>
            <button type="button" onClick={() => onSelect(user.id)}>
                Selecionar
            </button>
        </Panel>
    )
}