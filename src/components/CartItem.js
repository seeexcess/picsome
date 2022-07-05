import { useContext, useState } from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
  const { removeItem } = useContext(Context)
  //const [hovered, setHovered] = useState(false)
  const [hovered, ref] = useHover()

  const binClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'

  return (
    <div className="cart-item">
      <i 
        className={`${binClassName}`} 
        onClick={() => removeItem(item.id)}
        ref={ref}
      >
      </i>
      <img src={item.url} width="130px" alt="img" />
      <p>$5.99</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
}

export default CartItem