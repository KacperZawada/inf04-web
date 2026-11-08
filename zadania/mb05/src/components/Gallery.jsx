
import PhotoCard from './PhotoCard.jsx'

function Gallery({ zdjecia, onUsun, onPrzelacz }) {
  return (
    <div className="row">
      {zdjecia.map(zdjecie => (
        <PhotoCard
          key={zdjecie.id}
          {...zdjecie}
          onUsun={() => onUsun(zdjecie.id)}
          onPrzelacz={() => onPrzelacz(zdjecie.id)}
        />
      ))}
    </div>
  )
}

export default Gallery
