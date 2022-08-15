import React from "react"
import { cards, card } from "../styles/components.module.css"

const Portfolio = () => (
  <>
    <section>
      <h2>My Current Role</h2>
      <p>
        I am a lead front-end web developer at Lendio, a loan marketplace for
        small businesses.
      </p>
      <div className={cards}>
        <div className={card}>
          <i aria-hidden className="fas fa-circle-notch"></i>
          <h3>Lendio</h3>
          <p>A lending marketplace for small businesses.</p>
          <ul>
            <li>Vue</li>
            <li>Javascript</li>
            <li>Tooling</li>
          </ul>
          <div>
            <button
              rel="noreferrer"
              onClick={() => window.open("https://lendio.com", "_blank")}
            >
              Visit Site{" "}
              <i aria-hidden className="fas fa-external-link-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2>My History</h2>
      <p>
        In my previous role, I was a front-end web developer and the lead user
        interface designer for these web apps.
      </p>
      <div className={cards}>
        <div className={card}>
          <i aria-hidden className="fas fa-bible"></i>
          <h3>Digital Curriculum</h3>
          <p>A digital curriculum web app tailored for church leaders.</p>
          <ul>
            <li>React</li>
            <li>Javascript</li>
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
        <div className={card}>
          <i aria-hidden className="icomoon-ministryGrid"></i>
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
      </div>
    </section>
  </>
)

export default Portfolio
