function PhotoCard({ id, title, description, category, image, alt }) {
  const categoryLabels = {
    gory: 'Góry',
    morze: 'Morze',
    miasto: 'Miasto',
  }

  const categoryColors = {
    gory: 'success',
    morze: 'primary',
    miasto: 'secondary',
  }

  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={alt} />

      <div className="card-body">
        <span className={`badge text-bg-${categoryColors[category]} mb-2`}>
          {categoryLabels[category]}
        </span>

        <h2 className="card-title h5">{title}</h2>
        <p className="card-text">{description}</p>

        <button
          className="btn btn-outline-primary"
          type="button"
          data-bs-toggle="modal"
          data-bs-target={`#zdjecie${id}`}
        >
          Powiększ
        </button>
      </div>
    </div>
  )
}

export default PhotoCard