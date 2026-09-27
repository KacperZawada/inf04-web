function PhotoModal({ id, title, description, imageLarge, alt }) {
  return (
    <div
      className="modal fade"
      id={`zdjecie${id}`}
      tabIndex="-1"
      aria-labelledby={`zdjecie${id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fs-5" id={`zdjecie${id}Label`}>
              {title}
            </h2>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Zamknij"
            ></button>
          </div>

          <div className="modal-body">
            <img
              src={imageLarge}
              className="img-fluid rounded"
              alt={alt}
            />

            <p className="mt-3 mb-0">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoModal