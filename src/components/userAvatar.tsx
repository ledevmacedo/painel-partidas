interface UserAvatarProps {
    user: User
}

export default function UserAvatar({ user }: UserAvatarProps) {
    return (
        <img className="size-8 rounded-full"
            src={user.avatarUrl}
            alt={`${user.primeiro} ${user.ultimo}`}
        />
    )
}
