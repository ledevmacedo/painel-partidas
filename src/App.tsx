//IMPORTS

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
  return (
    //HTML
    <>
      <section className="flex flex-col gap-2">
        <UserGreeting user={user} />
        <UserCard user={user} onSelect={(userId) => console.log(userId)} />
        <Soma a={10} b={3} />
      </section>
    </>
  )
}