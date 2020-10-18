import React from "react"
import { Link } from "gatsby"

const NUM_PHOTOS = 34

const BigPicture: React.FC = () => {
  const randomPhotoName = Math.floor(Math.random() * NUM_PHOTOS)
  const randomPhotoSrc = `https://owenauch-photos.s3-us-west-1.amazonaws.com/${randomPhotoName}.JPG`

  return (
    <div className="BigPicture">
      <img className="BigPicture-image Global-bigBorder" src={randomPhotoSrc} />
      <div className="BigPicture-explainerText">
        I took this photo while travelling! Click <Link to="/">here</Link> or
        refresh the page to see a new one.
      </div>
    </div>
  )
}

export default BigPicture
