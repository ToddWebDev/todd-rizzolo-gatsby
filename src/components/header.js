import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { header, image } from "../styles/layout.module.css"

import Footer from "./footer"

const Header = () => {
  const baseURL = "https://api.github.com"

  const fetchGithubData = async () =>
    await fetch(`${baseURL}/users/toddwebdev`)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err))

  React.useEffect(() => {
    fetchGithubData()
  }, [])

  return (
    <header className={header}>
      <div>
        <StaticImage
          className={image}
          src="../images/profile-image.jpg"
          alt="Profile Image"
          placeholder="blurred"
          width={250}
          height={250}
        />
        <h1>Todd Rizzolo</h1>
        <h2>
          {" "}
          Half Stack Developer. Front-End Coder.
          <br />
          UX. User Interface Builder.
        </h2>
        <h4>
          <i aria-hidden className="fas fa-map-pin"></i> Salt Lake City, Utah
        </h4>
      </div>
      <Footer />
    </header>
  )
}

export default Header
