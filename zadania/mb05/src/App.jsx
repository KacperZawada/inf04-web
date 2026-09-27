import Navbar from './components/Navbar'
import CategoryBar from './components/CategoryBar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
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

      <main className="container">
        <CategoryBar />
        <Gallery />
      </main>

      <Footer />
    </>
  )
}

export default App