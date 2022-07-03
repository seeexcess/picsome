import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([])

  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data))
  }, [])

  function toggleFavourite(id) {
    setAllPhotos(prevPhotos => {
      const newPhotos = prevPhotos.map(photo => {
        if(photo.id === id) {
          return {...photo, isFavorite: !photo.isFavorite}
        } else {
          return photo
        }
      })

      return newPhotos
    })
  }
  console.log(allPhotos)

  return (
    <Context.Provider value={{allPhotos, toggleFavourite}}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }