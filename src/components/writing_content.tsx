import React from "react"
import WritingDataJSON from "../content/writing_data.json"
import WritingLink from "./writing_link"

interface Link {
  title: string
  description: string
  link: string
  date: string
}

interface Section {
  sectionName: string
  links: Link[]
}

const WritingContent: React.FC = () => {
  const linkSortFunction = (link1: Link, link2: Link) =>
    Date.parse(link2.date) - Date.parse(link1.date)
  const writingLinks = WritingDataJSON.sections.map((section: Section) => {
    const links = section.links
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
    return (
      <div key={section.sectionName}>
        <h2>{section.sectionName}</h2>
        {links}
      </div>
    )
  })
  return <div className="WritingContent Global-bigBorder">{writingLinks}</div>
}

export default WritingContent
