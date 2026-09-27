function CategoryBar() {
  return (
    <div className="d-flex flex-wrap gap-2 mb-4">
      <button className="btn btn-primary" type="button">
        Wszystkie
      </button>

      <button className="btn btn-outline-primary" type="button">
        Góry
      </button>

      <button className="btn btn-outline-primary" type="button">
        Morze
      </button>

      <button className="btn btn-outline-primary" type="button">
        Miasto
      </button>
    </div>
  )
}

export default CategoryBar