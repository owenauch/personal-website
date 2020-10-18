import React from "react"
import { Link } from "gatsby"
import SidebarLinkContainer from "../components/sidebar_link_container"
import { FiTwitter, FiMail } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"

const Sidebar: React.FC = () => (
  <div className="Sidebar Global-bigBorder">
    <div className="Sidebar-wideContainer">
      <Link to="/" className="Sidebar-mainName Sidebar-genericLink">
        Owen Auch
      </Link>
      <SidebarLinkContainer isMobile={false} />
      <div className="Sidebar-iconContainer">
        <a href="https://twitter.com/owenauch" className="Sidebar-icon">
          <FiTwitter color="black" style={{ verticalAlign: "middle" }} />
        </a>
        <a href="mailto:owenauch@gmail.com" className="Sidebar-icon">
          <FiMail color="black" style={{ verticalAlign: "middle" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/owenauch/"
          className="Sidebar-icon"
        >
          <FaLinkedinIn color="black" style={{ verticalAlign: "middle" }} />
        </a>
      </div>
    </div>
    <SidebarLinkContainer isMobile={true} />
  </div>
)

export default Sidebar
