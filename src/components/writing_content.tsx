import React from "react"
import WritingDataJSON from "../content/writing_data.json"
import WritingLink from "./writing_link"

interface Link {
  title: string
  description: string
  link: string
  date: string
}

const WritingContent: React.FC = () => {
  const linkSortFunction = (link1: Link, link2: Link) =>
    Date.parse(link2.date) - Date.parse(link1.date)
  const writingLinks = WritingDataJSON.links
    .sort(linkSortFunction)
    .map((link: Link) => (
      <WritingLink
        key={link.title}
        title={link.title}
        description={link.description}
        link={link.link}
        date={link.date}
      />
    ))
  return <div className="WritingContent Global-bigBorder">{writingLinks}</div>
}

export default WritingContent
