import React from "react"
import { cards, card } from "../styles/components.module.css"

const Examples = () => (
  <section>
    <h2>My Projects</h2>
    <p>
      While much of the code I write for my employer is private, I do share
      examples of my code on these platforms.
    </p>
    <div className={cards}>
      <div className={card}>
        <h3>
          <i aria-hidden className="fas fa-laptop-code"></i> Code Sandbox
        </h3>
        <ul>
          <li>React</li>
          <li>User Interface Design</li>
        </ul>
        <div>
          <button
            rel="noreferrer"
            onClick={() =>
              window.open("https://codesandbox.io/u/ToddWebDev", "_blank")
            }
          >
            Visit <i aria-hidden className="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
      <div className={card}>
        <h3>
          <i aria-hidden className="fab fa-codepen"></i> CodePen
        </h3>
        <ul>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <div>
          <button
            rel="noreferrer"
            onClick={() =>
              window.open("https://www.codepen.io/toddwebdev", "_blank")
            }
          >
            Visit <i aria-hidden className="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
      <div className={card}>
        <h3>
          <i className="fab fa-github"></i> GitHub
        </h3>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>Webpack</li>
        </ul>
        <div>
          <button
            rel="noreferrer"
            onClick={() =>
              window.open("https://www.github.com/toddwebdev", "_blank")
            }
          >
            Visit <i aria-hidden className="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Examples
