import React from "react"
import { footer } from "../styles/layout.module.css"

const Footer = () => (
  <div className={footer}>
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.github.com/toddwebdev"
            target="_blank"
            className="icon"
          >
            <span className="fab fa-github"></span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/toddwebdev"
            target="_blank"
            className="icon"
          >
            <span className="fab fa-instagram"></span>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/toddwebdev"
            target="_blank"
            className="icon"
          >
            <span className="fab fa-twitter"></span>
          </a>
        </li>
        <li>
          <a
            href="https://www.codepen.io/toddwebdev"
            target="_blank"
            className="icon"
          >
            <span className="fab fa-codepen"></span>
          </a>
        </li>
      </ul>
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  </div>
)

export default Footer
