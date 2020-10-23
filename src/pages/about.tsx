import React from "react"
import { Helmet } from "react-helmet"
import Sidebar from "../components/sidebar"
import AboutContent from "../components/about_content"

const About: React.FC = () => (
  <div className="Global-mainContainer">
    <Helmet>
      <title>About | Owen Auch</title>
    </Helmet>
    <Sidebar />
    <AboutContent />
  </div>
)

export default About
