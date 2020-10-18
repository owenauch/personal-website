import React from "react"
import { Link } from "gatsby"

export interface Props {
  isMobile: boolean
}

const SidebarLinkContainer: React.FC<Props> = (props: Props) => {
  const containerClassName = props.isMobile
    ? "Sidebar-linkContainer--narrow"
    : "Sidebar-linkContainer"
  return (
    <div className={containerClassName}>
      <Link to="/about/" className="Sidebar-listLink Sidebar-genericLink">
        About
      </Link>
      <Link to="/inklings/" className="Sidebar-listLink Sidebar-genericLink">
        Inklings
      </Link>
    </div>
  )
}

export default SidebarLinkContainer
