
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useZdjecia } from '../hooks/useZdjecia.js'
import { dodajZdjecie } from '../services/zdjecia.js'

const PUSTY_FORMULARZ = {
  title: '',
  category: '',
  image: '',
  description: '',
}

function DodajPage() {
  const navigate = useNavigate()
  const { isLoading, error } = useZdjecia()

  const [formularz, setFormularz] = useState(PUSTY_FORMULARZ)

  function zmienPole(pole) {
    return event => {
      setFormularz({
        ...formularz,
        [pole]: event.target.value,
      })
    }
  }

  function obslugaSubmit(event) {
    event.preventDefault()

    dodajZdjecie({
      title: formularz.title,
      category: formularz.category,
      image: formularz.image,
      imageLarge: formularz.image,
      alt: formularz.title,
      description: formularz.description,
    })

    navigate('/')
  }

  if (isLoading) {
    return (
      <div className="container mt-4">
        <p>Ładowanie...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    )
  }

  return (
    <div className="container mt-4 mb-5">
      <h1>Dodaj zdjęcie</h1>

      <form onSubmit={obslugaSubmit} className="row g-3">
        <div className="col-12">
          <label htmlFor="title" className="form-label">
            Tytuł
          </label>

          <input
            id="title"
            type="text"
            className="form-control"
            value={formularz.title}
            onChange={zmienPole('title')}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="category" className="form-label">
            Kategoria
          </label>

          <select
            id="category"
            className="form-select"
            value={formularz.category}
            onChange={zmienPole('category')}
            required
          >
            <option value="">Wybierz kategorię...</option>
            <option value="gory">Góry</option>
            <option value="morze">Morze</option>
            <option value="miasto">Miasto</option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="image" className="form-label">
            Adres URL zdjęcia
          </label>

          <input
            id="image"
            type="url"
            className="form-control"
            value={formularz.image}
            onChange={zmienPole('image')}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="description" className="form-label">
            Opis
          </label>

          <textarea
            id="description"
            className="form-control"
            rows="4"
            value={formularz.description}
            onChange={zmienPole('description')}
            required
          />
        </div>

        <div className="col-12 d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Zapisz
          </button>

          <Link to="/" className="btn btn-secondary">
            Anuluj
          </Link>
        </div>
      </form>
    </div>
  )
}

export default DodajPage
