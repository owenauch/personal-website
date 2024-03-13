import React from "react"
import aboutPhoto from "../images/me2.png"
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
        I currently lead the Core Billing team at <Link to="https://www.withorb.com/">Orb</Link>, a usage-based billing startup. Previously, I was a tech lead of a product team focused on growth at Asana,
        and before that I worked at a couple of small startups. I graduated Magna Cum Laude from Washington University in St. Louis,
        studying economics and computer science.
      </p>
      <p className="AboutContent-thingsILike">Some things I like</p>
      <ul>
        <li>Being outside</li>
        <li>
          <Link to="https://open.spotify.com/user/1222073?si=TRlnYRvkStab6VtJWN7J8w">
            Playing and listening to music
          </Link>{" "}
          (especially indie rock, folk, hip hop and jazz)
        </li>
        <li>
          Building things that help others (usually with{" "}
          <Link to="https://github.com/owenauch">code</Link>)
        </li>
        <li>
          <Link to="https://www.goodreads.com/review/list/27881811?ref=nav_mybooks&sort=date_read">
            Reading
          </Link>{" "}
          and <Link to="/writing/">writing</Link>
        </li>
        <li>Meaningful relationships</li>
        <li>Theology, philosophy, history, psychology and economics (etc.)</li>
      </ul>
      <p className="AboutContent-finalBlurb">
        You can find a copy of my resume (updated June 2022) <Link to="https://drive.google.com/file/d/1USyrqB5iBwHVdrtY8G20nCvctgGdS2LW/view?usp=sharing">here</Link>. Feel free to reach
        out to me at owenauch [at] gmail.com!
      </p>
    </div>
  </div>
)

export default AboutContent
