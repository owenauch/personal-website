import React from "react"
import Sidebar from "../components/sidebar"
import AboutContent from "../components/about_content"

const About: React.FC = () => (
  <div className="Global-mainContainer">
    <Sidebar />
    <AboutContent />
  </div>
)

export default About
