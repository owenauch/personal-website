import React from "react"
import { Link } from "gatsby"
import SidebarLinkContainer from "../components/sidebar_link_container"
import { FiTwitter, FiMail, FiGithub } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"

const Sidebar: React.FC = () => (
  <div className="Sidebar Global-bigBorder">
    <div className="Sidebar-wideContainer">
      <Link to="/" className="Sidebar-mainName Sidebar-genericLink">
        Owen Auch
      </Link>
      <SidebarLinkContainer isMobile={false} />
      <div className="Sidebar-iconContainer">
        <Link to="https://twitter.com/owenauch" className="Sidebar-icon">
          <FiTwitter color="black" style={{ verticalAlign: "middle" }} />
        </Link>
        <Link to="mailto:owenauch@gmail.com" className="Sidebar-icon">
          <FiMail color="black" style={{ verticalAlign: "middle" }} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/owenauch/"
          className="Sidebar-icon"
        >
          <FaLinkedinIn color="black" style={{ verticalAlign: "middle" }} />
        </Link>
        <Link to="https://github.com/owenauch" className="Sidebar-icon">
          <FiGithub color="black" style={{ verticalAlign: "middle" }} />
        </Link>
      </div>
    </div>
    <SidebarLinkContainer isMobile={true} />
  </div>
)

export default Sidebar
