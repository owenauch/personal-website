import React from "react"
import { Helmet } from "react-helmet"
import Sidebar from "../components/sidebar"
import BigPicture from "../components/big_picture"

const Index: React.FC = () => (
  <div className="Global-mainContainer">
    <Helmet>
      <title>Owen Auch</title>
    </Helmet>
    <Sidebar />
    <BigPicture />
  </div>
)

export default Index
