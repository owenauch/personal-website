import React from "react"
import Sidebar from "../components/sidebar"
import WritingContent from "../components/writing_content"

const Writing: React.FC = () => (
  <div className="Global-mainContainer">
    <Sidebar />
    <WritingContent />
  </div>
)

export default Writing
