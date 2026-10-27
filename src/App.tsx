//IMPORTS

import UserGreeting from "./components/UserGreeting"

export default function App() {
  //LOGICA

  const user = { primeiro: "Alberto", ultimo: "Menezes", id: "ID_OO1" }

  return (
    //HTML
    <>
      <UserGreeting user={user} />
      <UserGreeting user={user} />
      <UserGreeting user={user} />
      <UserGreeting user={user} />
      <UserGreeting user={user} />
      <UserGreeting user={user} />
    </>
  )
}