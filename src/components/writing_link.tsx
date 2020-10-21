import React from "react"
import { Link } from "gatsby"

interface Props {
  title: string
  description: string
  link: string
  date: string
}

const WritingLink: React.FC<Props> = (props: Props) => (
  <div className="WritingLink">
    <p className="WritingLink-date">{props.date}</p>
    <p className="WritingLink-title">
      <Link to={props.link}>{props.title}</Link>
    </p>
    <p className="WritingLink-description">{props.description}</p>
  </div>
)

export default WritingLink
