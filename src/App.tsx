//IMPORTS

import Soma from "./components/soma"
import UserGreeting from "./components/UserGreeting"

export default function App() {
  //LOGICA

  const user = { primeiro: "Alberto", ultimo: "Menezes", id: "ID_OO1" }

  return (
    //HTML
    <>
      <section className="flex flex-col gap-2">

        <UserGreeting user={user} />
        <Soma a={10} b={3} />
        <Soma a={3} b={10} />
      </section>
    </>
  )
}