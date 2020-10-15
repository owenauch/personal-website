import React from "react"
import aboutPhoto from "../images/me.jpg"

const AboutContent: React.FC = () => (
  <div className="AboutContent Global-bigBorder">
    <img
      src={aboutPhoto}
      className="AboutContent-aboutPhoto Global-bigBorder"
    />
  </div>
)

export default AboutContent
