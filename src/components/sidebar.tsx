import React from "react"
import { Link } from "gatsby"
import { FiTwitter, FiMail } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"

const Sidebar: React.FC = () => (
  <div className="Sidebar">
    <div className="Sidebar-wideContainer">
      <p className="Sidebar-mainName">Owen Auch</p>
      <div className="Sidebar-linkContainer">
        <Link to="/about/" className="Sidebar-listLink">
          About
        </Link>
        <Link to="/inklings/" className="Sidebar-listLink">
          Inklings
        </Link>
      </div>
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
    <div className="Sidebar-linkContainer--narrow">
      <Link to="/about/" className="Sidebar-listLink">
        About
      </Link>
      <Link to="/inklings/" className="Sidebar-listLink">
        Inklings
      </Link>
    </div>
  </div>
)

export default Sidebar
