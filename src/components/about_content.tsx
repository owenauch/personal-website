import React from "react"
import aboutPhoto from "../images/me.jpg"
import { Link } from "gatsby"

const AboutContent: React.FC = () => (
  <div className="AboutContent Global-bigBorder">
    <div className="AboutContent-imageContainer">
      <img
        src={aboutPhoto}
        className="AboutContent-aboutPhoto Global-bigBorder"
      />
    </div>
    <div className="AboutContent-text">
      <p>
        I work as a software engineer at Asana in San Francisco. Previously, I
        worked at a couple of small startups, and studied economics and computer
        science at Washington University in St. Louis.
      </p>
      <p className="AboutContent-thingsILike">Some things I like</p>
      <ul>
        <li>Being outside</li>
        <li>
          <Link to="https://open.spotify.com/user/1222073?si=TRlnYRvkStab6VtJWN7J8w">
            Music
          </Link>{" "}
          (especially indie, funk, hip hop and jazz)
        </li>
        <li>
          Building things that help others (usually with{" "}
          <Link to="https://github.com/owenauch">code</Link>)
        </li>
        <li>
          <Link to="https://www.goodreads.com/review/list/27881811-owen?ref=nav_mybooks&shelf=read&sort=rating">
            Reading
          </Link>{" "}
          and <Link to="/writing/">writing</Link>
        </li>
        <li>Friendships</li>
        <li>Theology</li>
      </ul>
      <p className="AboutContent-thingsILike">
        Some things I'm interested in working on
      </p>
      <ul>
        <li>Internet privacy and decentralization</li>
        <li>Technology serving the disadvantaged</li>
        <li>Market design and game theory problems</li>
        <li>Early-stage startups</li>
        <li>Interesting ideas</li>
      </ul>
      <p className="AboutContent-finalBlurb">
        If you like or are working on any of these things, feel free to reach
        out to me at{" "}
        <Link to="mailto:owenauch@gmail.com">owenauch@gmail.com</Link>!
      </p>
    </div>
  </div>
)

export default AboutContent
