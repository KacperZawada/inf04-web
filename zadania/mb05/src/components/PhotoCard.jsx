
import { Link } from 'react-router-dom'

const NAZWA_KATEGORII = {
  gory: 'Góry',
  morze: 'Morze',
  miasto: 'Miasto',
}

const KOLOR_KATEGORII = {
  gory: 'success',
  morze: 'primary',
  miasto: 'dark',
}

function PhotoCard({
  id,
  title,
  description,
  category,
  image,
  alt,
  favorite,
  onUsun,
  onPrzelacz,
}) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image}
          className="card-img-top"
          alt={alt}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>

          <div className="mb-2">
            <span className={`badge bg-${KOLOR_KATEGORII[category]}`}>
              {NAZWA_KATEGORII[category]}
            </span>

            {favorite && (
              <span className="ms-2 text-warning">
                ★ Ulubione
              </span>
            )}
          </div>

          <p className="card-text">{description}</p>

          <div className="mt-auto d-flex gap-2">
            <Link
              to={`/zdjecie/${id}`}
              className="btn btn-outline-primary"
            >
              Powiększ
            </Link>

            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={onPrzelacz}
            >
              {favorite ? '★' : '☆'}
            </button>

            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={onUsun}
            >
              Usuń
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard
