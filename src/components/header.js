import React from "react"
import { header, content } from "../styles/layout.module.css"

import Footer from "./footer"
// import avatar from "../assets/images/avatar.jpg"

const Header = () => (
  <header className={header}>
    <div>
      <a href="#">
        <img
          src="https://source.unsplash.com/random/400x200"
          alt=""
          width={150}
          height={150}
        />
      </a>
      <h1>
        <strong>Todd Rizzolo</strong> Half Stack Developer. Front-End Coder.
        <br />
        UX. User Interface Builder.
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
