import React from "react"
import { cards, card } from "../styles/components.module.css"

const Portfolio = () => (
  <section>
    <h2>My Projects</h2>
    <p>Portfolio</p>
    <p>
      While much of the code I write for my employer is private, I do share
      examples of my code on{" "}
      <a href="https://codesandbox.io/u/ToddWebDev" target="_blank">
        Code Sandbox
      </a>{" "}
      and{" "}
      <a href="https://www.codepen.io/toddwebdev" target="_blank">
        CodePen
      </a>
      . Additionally, you may see some of my open source side projects on{" "}
      <a href="https://www.github.com/toddwebdev" target="_blank">
        GitGub
      </a>
      .
    </p>
    <div className={cards}>
      <div className={card}>
        <h3>Ministry Grid</h3>
        <p>A training web app tailored for church leaders.</p>
        <ul>
          <li>React</li>
          <li>AngularJS</li>
          <li>UX/UI</li>
        </ul>
        <button
          className="full-width"
          onClick={() => window.open("https://ministrygrid.com/", "_blank")}
        >
          Visit Site
        </button>
      </div>
      <div className={card}>
        <h3>Digital Curriculum</h3>
        <p>A digital curriculum web app tailored for church leaders.</p>
        <ul>
          <li>React</li>
          <li>UX/UI</li>
        </ul>
        <button
          className="full-width"
          onClick={() =>
            window.open("https://ministrygrid.com/curriculum", "_blank")
          }
        >
          Visit Site
        </button>
      </div>
    </div>
  </section>
)

export default Portfolio
