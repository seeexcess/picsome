import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

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
  
  function addItem(item) {
    setCartItems(prevItem => [...prevItem, item])
  }

  function removeItem(id) {
    const filtered = cartItems.filter(item => item.id !== id)
    setCartItems(filtered)
  }

  function emptyCart() {
    setCartItems([])
  }

  function totalCost() {
    let total = 0;
    for(let i = 0; i < cartItems.length; i++) {
      total += 5.99
    }

    return total
  }

  console.log(cartItems)

  return (
    <Context.Provider 
      value={{allPhotos, toggleFavourite, cartItems, addItem, removeItem, totalCost, emptyCart}}
    >
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }