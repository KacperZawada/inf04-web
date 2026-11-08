
import { useParams, useNavigate } from 'react-router-dom'
import { useZdjecia } from '../hooks/useZdjecia.js'

function ZdjeciePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { zdjecia, isLoading, error } = useZdjecia()

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

  const zdjecie = zdjecia.find(z => z.id === Number(id))

  if (!zdjecie) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">
          Nie ma zdjęcia o numerze {id}.
        </div>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate(-1)}
        >
          Wstecz
        </button>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h1>{zdjecie.title}</h1>

      <img
        src={zdjecie.imageLarge || zdjecie.image}
        className="img-fluid rounded mb-3"
        alt={zdjecie.alt}
      />

      <p>{zdjecie.description}</p>

      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => navigate(-1)}
      >
        Wstecz
      </button>
    </div>
  )
}

export default ZdjeciePage
