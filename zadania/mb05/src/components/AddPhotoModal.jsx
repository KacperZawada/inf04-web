function AddPhotoModal() {
  return (
    <div
      className="modal fade"
      id="dodajZdjecie"
      tabIndex="-1"
      aria-labelledby="dodajZdjecieLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="dodajZdjecieLabel">
              Dodaj zdjęcie
            </h2>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Zamknij"
            ></button>
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="tytul" className="form-label">
                  Tytuł
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tytul"
                  required
                />
                <div className="invalid-feedback">
                  Podaj tytuł zdjęcia.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="kategoria" className="form-label">
                  Kategoria
                </label>
                <select
                  className="form-select"
                  id="kategoria"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Wybierz kategorię
                  </option>
                  <option value="gory">Góry</option>
                  <option value="morze">Morze</option>
                  <option value="miasto">Miasto</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="opis" className="form-label">
                  Opis
                </label>
                <textarea
                  className="form-control"
                  id="opis"
                  rows="3"
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="adresZdjecia" className="form-label">
                  Adres zdjęcia
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="adresZdjecia"
                  placeholder="https://..."
                  required
                />
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Anuluj
            </button>

            <button type="button" className="btn btn-primary">
              Dodaj
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPhotoModal