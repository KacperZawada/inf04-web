function FiltersOffcanvas() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="panelFiltrow"
      aria-labelledby="panelFiltrowLabel"
    >
      <div className="offcanvas-header">
        <h2 className="offcanvas-title fs-5" id="panelFiltrowLabel">
          Filtry
        </h2>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Zamknij"
        ></button>
      </div>

      <div className="offcanvas-body">
        <p className="fw-semibold">Kategorie</p>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="filtrGory"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="filtrGory">
            Góry
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="filtrMorze"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="filtrMorze">
            Morze
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="filtrMiasto"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="filtrMiasto">
            Miasto
          </label>
        </div>
      </div>
    </div>
  )
}

export default FiltersOffcanvas