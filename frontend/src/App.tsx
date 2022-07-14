import NotificationButton from "./components/NotificationButton"

function App() {
  return (
    // O componente react não pode exportar mais de uma tag, apra exportar mais de uma precisa colocar
    // as tags dentro de abre e fecha.
    <>
      <h1>Olá mundo!</h1>
      <NotificationButton />
    </>
  )
}

export default App
