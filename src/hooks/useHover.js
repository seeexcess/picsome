import { useEffect, useRef, useState } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  function enter() {
    setHovered(true)
  }

  function leave() {
    setHovered(false)
  }

  useEffect(() => {

    const current = ref.current
    
    ref.current.addEventListener('mouseenter', enter)
    ref.current.addEventListener('mouseleave', leave)

    return () => {
      current.removeEventListener('mouseenter', enter)
      current.removeEventListener('mouseleave', leave)
    }
  }, [])

  return [hovered, ref]
}

export default useHover