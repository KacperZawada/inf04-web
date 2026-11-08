
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useZdjecia } from '../hooks/useZdjecia.js'
import {
  usunZdjecie,
  przelaczUlubione,
} from '../services/zdjecia.js'
import CategoryBar from '../components/CategoryBar.jsx'
import Gallery from '../components/Gallery.jsx'
import ZdjecieDnia from '../components/ZdjecieDnia.jsx'

function GaleriaPage() {
  const {
    zdjecia,
    setZdjecia,
    isLoading,
    error,
  } = useZdjecia()

  const [aktywnaKategoria, setAktywnaKategoria] = useState('wszystkie')

  if (isLoading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status" />
        <p className="mt-2">Ładowanie galerii...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">
          Nie udało się pobrać danych: {error}
        </div>
      </div>
    )
  }

  if (zdjecia.length === 0) {
    return (
      <div className="container mt-4">
        <div className="alert alert-secondary">
          Katalog jest na razie pusty.
        </div>
      </div>
    )
  }

  const widoczne =
    aktywnaKategoria === 'wszystkie'
      ? zdjecia
      : zdjecia.filter(z => z.category === aktywnaKategoria)

  return (
    <>
      <main className="container mt-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div>
            <h1>Galeria zdjęć</h1>
            <p className="text-body-secondary">
              Przeglądaj zdjęcia według kategorii.
            </p>
          </div>

          <Link to="/dodaj" className="btn btn-primary">
            Dodaj zdjęcie
          </Link>
        </div>

        <CategoryBar
          aktywna={aktywnaKategoria}
          onWybierz={setAktywnaKategoria}
        />

        <p className="text-body-secondary">
          Wyświetlono {widoczne.length} z {zdjecia.length} zdjęć
        </p>

        {widoczne.length === 0 && (
          <div className="alert alert-warning">
            Nie znaleziono zdjęć w tej kategorii.
          </div>
        )}

        <Gallery
          zdjecia={widoczne}
          onUsun={id => setZdjecia(usunZdjecie(id))}
          onPrzelacz={id => setZdjecia(przelaczUlubione(id))}
        />
      </main>

      <ZdjecieDnia />
    </>
  )
}

export default GaleriaPage
