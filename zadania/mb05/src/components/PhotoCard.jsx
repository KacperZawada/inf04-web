function PhotoCard({
  id,
  title,
  description,
  category,
  image,
  alt,
  onUsun,
}) {
  const categoryLabel =
    category === 'gory'
      ? 'Góry'
      : category === 'morze'
        ? 'Morze'
        : 'Miasto'

  const categoryColor =
    category === 'gory'
      ? 'success'
      : category === 'morze'
        ? 'primary'
        : 'secondary'

  return (
    <article className="card h-100">
      <img src={image} className="card-img-top" alt={alt} />

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <h2 className="card-title h5">{title}</h2>

          <span className={`badge text-bg-${categoryColor}`}>
            {categoryLabel}
          </span>
        </div>

        <p className="card-text">{description}</p>

        <div className="d-flex gap-2 mt-auto">
          <button
            type="button"
            className="btn btn-outline-primary flex-fill"
            data-bs-toggle="modal"
            data-bs-target={`#zdjecie${id}`}
          >
            Powiększ
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
    </article>
  )
}

export default PhotoCard