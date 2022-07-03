import { useState, useContext } from "react"
import PropTypes from 'prop-types';

import { Context } from "../Context"

function Image({img, className}) {
  const { toggleFavourite } = useContext(Context)
  const [hovered, setHovered] = useState(false)

  //console.log(hovered)
  function heartIcon() {
    if(img.isFavorite) {
      return (
        <i onClick={() => toggleFavourite(img.id)} className="ri-heart-fill favorite"></i>
      )
    } else if(hovered) {
      return (
        <i onClick={() => toggleFavourite(img.id)} className="ri-heart-line favorite"></i>
      )
    }
  }

  function cartIcon() {
    if(hovered) {
      return (
        <i className="ri-add-circle-line cart"></i>
      )
    }
  }

  return (
    <div 
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} alt="" className="image-grid"/>
      {
        heartIcon()
      }
      {
        cartIcon()
      }
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  })
}

export default Image