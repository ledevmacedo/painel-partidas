//IMPORTS

//TYPES / INTERFACE


interface UserGreetingProps {
    user: User
}

export default function UserGreeting({ user, }: UserGreetingProps) {
    //LOGICA

    return (
        //HTML
        <div className="bg-red-500 p-4">
            <h1>Olá,{user.prefix} {user.primeiro} {user.ultimo}</h1>
        </div>
    )
}