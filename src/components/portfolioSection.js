import React from "react"
import { cards, card } from "../styles/components.module.css"

const Portfolio = () => (
  <section>
    <h2>My Portfolio</h2>
    <p>
      I am the lead user interface designer and front-end developer for these
      web apps.
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
        <div>
          <button
            rel="noreferrer"
            onClick={() => window.open("https://ministrygrid.com/", "_blank")}
          >
            Visit Marketing{" "}
            <i aria-hidden className="fas fa-external-link-alt"></i>
          </button>
          <button
            rel="noreferrer"
            className="secondary"
            onClick={() =>
              window.open(
                "https://ministrygrid.lifeway.com/#/catalog",
                "_blank"
              )
            }
          >
            Visit App <i aria-hidden className="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
      <div className={card}>
        <h3>Digital Curriculum</h3>
        <p>A digital curriculum web app tailored for church leaders.</p>
        <ul>
          <li>React</li>
          <li>UX/UI</li>
        </ul>
        <div>
          <button
            rel="noreferrer"
            onClick={() =>
              window.open("https://ministrygrid.com/curriculum", "_blank")
            }
          >
            Visit Marketing{" "}
            <i aria-hidden className="fas fa-external-link-alt"></i>
          </button>
          <button
            rel="noreferrer"
            className="secondary"
            onClick={() =>
              window.open(
                "https://ministrygrid.lifeway.com/#/bible-studies",
                "_blank"
              )
            }
          >
            Visit App <i aria-hidden className="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Portfolio
