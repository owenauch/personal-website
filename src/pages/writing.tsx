import React from "react"
import { Helmet } from "react-helmet"
import Sidebar from "../components/sidebar"
import WritingContent from "../components/writing_content"

const Writing: React.FC = () => (
  <div className="Global-mainContainer">
    <Helmet>
      <title>Writing | Owen Auch</title>
    </Helmet>
    <Sidebar />
    <WritingContent />
  </div>
)

export default Writing
