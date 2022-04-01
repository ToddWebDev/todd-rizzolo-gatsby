import React from "react"
import { card, smallCards } from "../styles/components.module.css"

const Prototypes = () => (
  <section>
    <h2>My Prototypes</h2>
    <p>
      Here are some examples of my high fidelity prototypes used to drive product development.
    </p>
    <div className={smallCards}>
      <div className={card}>
        <i aria-hidden className="fab fa-figma small"></i>
        <h3>Organization Dashboard</h3>
        <p>A dashboard where administrators can access important areas of the application.</p>
        <ul>
          <li>Figma</li>
          <li>User Experience</li>
        </ul>
        <div>
          <button
            rel="noreferrer"
            onClick={() =>
              window.open("https://www.figma.com/proto/augSswlyPFhXgoZudQPG5j/Manage-Training-Catalog?page-id=0%3A1&node-id=33%3A1840&viewport=367%2C48%2C0.23&scaling=min-zoom&starting-point-node-id=33%3A1840", "_blank")
            }
          >
            View Prototype <i aria-hidden className="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
      <div className={card}>
        <i aria-hidden className="fab fa-figma small"></i>
        <h3>Design System</h3>
        <p>A system of defined styles, components and use-cases for Ministry Grid.</p>
        <ul>
          <li>Figma</li>
          <li>User Experience</li>
        </ul>
        <div>
          <button
            rel="noreferrer"
            onClick={() =>
              window.open("https://www.figma.com/proto/Mz9D9Fti5A5aSqHrxDWbNh5v/Ministry-Grid-Design-System?page-id=0%3A1&node-id=117%3A29&viewport=367%2C48%2C0.18&scaling=min-zoom&starting-point-node-id=117%3A29", "_blank")
            }
          >
            View Prototype <i aria-hidden className="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
      <div className={card}>
        <i aria-hidden className="fab fa-figma small"></i>
        <h3>Course Settings</h3>
        <p>Manage the attributes and settings of a course in the training catalog.</p>
        <ul>
          <li>Figma</li>
          <li>User Experience</li>
        </ul>
        <div>
          <button
            rel="noreferrer"
            onClick={() =>
              window.open("https://www.figma.com/proto/augSswlyPFhXgoZudQPG5j/Manage-Training-Catalog?page-id=0%3A1&node-id=35%3A565&viewport=367%2C48%2C0.23&scaling=min-zoom&starting-point-node-id=35%3A565&show-proto-sidebar=1", "_blank")
            }
          >
            View Prototype <i aria-hidden className="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Prototypes
