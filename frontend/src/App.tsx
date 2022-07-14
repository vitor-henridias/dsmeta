import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    // O componente react não pode exportar mais de uma tag, apra exportar mais de uma precisa colocar
    // as tags dentro de abre e fecha.
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
