import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <header className="container py-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div>
            <h1 className="mb-1">Galeria zdjęć</h1>
            <p className="text-body-secondary mb-0">
              Przeglądaj zdjęcia według kategorii.
            </p>
          </div>

          <div className="d-flex gap-2">
            <button
              className="btn btn-outline-secondary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#panelFiltrow"
            >
              Filtry
            </button>

            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#dodajZdjecie"
            >
              Dodaj zdjęcie
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default App