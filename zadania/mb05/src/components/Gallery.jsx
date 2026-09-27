import photos from '../data/photos.json'
import PhotoCard from './PhotoCard'

function Gallery() {
  return (
    <div className="row g-4">
      {photos.map((photo) => (
        <div className="col-12 col-md-6 col-lg-4" key={photo.id}>
          <PhotoCard {...photo} />
        </div>
      ))}
    </div>
  )
}

export default Gallery