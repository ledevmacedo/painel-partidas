//IMPORTS

import Mailbox from "./components/mailBox"
import Soma from "./components/soma"
import UserCard from "./components/userCard"
import UserGreeting from "./components/userGreeting"



export default function App() {
  //LOGICA
  const avatarURL = "https://static.vecteezy.com/system/resources/thumbnails/063/477/529/small/neutral-gray-silhouette-of-male-avatar-defoult-photo-placeholder-with-short-hair-for-anonymous-profile-picture-with-minimalist-style-suitable-for-various-social-media-platforms-and-websites-vector.jpg"

  const user: User = {
    id: "user-1",
    primeiro: "Alberto",
    ultimo: "Menezes",
    avatarUrl: avatarURL,
  }

  const messages = [
    { id: "1", text: "Reunião às 10h" },
    { id: "2", text: "Entrega do exercício" },
  ]
  return (
    //HTML
    <>
      <section className="flex flex-col gap-2">
        <UserGreeting user={user} />
        <UserGreeting />
        <UserCard user={user} onSelect={(userId) => console.log(userId)} />
        <Soma a={10} b={3} />

        <div className="flex flex-col gap-4 p-6">
          {/* Com mensagens → "Tens 2 mensagens por ler." */}
          <Mailbox unreadMessages={messages} />

          {/* Sem mensagens → só o título, sem o 0 */}
          <Mailbox unreadMessages={[]} />
        </div>
      </section>
    </>
  )
}