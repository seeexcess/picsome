import { useContext } from "react";

import { Context } from "../Context"
import { getClass } from "../utils"
import Image from "../components/Image";

function Photos() {
  const { allPhotos } = useContext(Context)

  const imgEl = allPhotos.map((photo, i) => (
    <Image key={photo.id} img={photo} className={getClass(i)}/>
  ))

  return (
    <main className="photos">
      { imgEl }
    </main>
  )
}

export default Photos