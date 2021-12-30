import React from "react"
import Layout from "../components/layout"
import PortfolioSection from "../components/portfolioSection"
import useVH from "react-viewport-height"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default () => {
  useVH()
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Layout id="top">
          <section>
            <div style={{ position: "absolute", top: "3rem", right: "3rem" }}>
              {theme === "light" ? (
                <button onClick={() => toggleTheme("dark")}>
                  <i aria-hidden className="fas fa-lightbulb"></i> Light Mode
                </button>
              ) : (
                <button onClick={() => toggleTheme("light")}>
                  <i aria-hidden className="fas fa-moon"></i> Dark Mode
                </button>
              )}
            </div>
            <h2>Front-End Web Developer</h2>
            <p>Toolbox</p>
            <ul className="flex-list">
              <li>Javascript</li>
              <li>React</li>
              <li>AngularJS</li>
              <li>Webpack</li>
              <li className="list-fill"></li>
            </ul>
            <ul>
              <li>Gatsby</li>
              <li>GraphQL</li>
              <li>Accessibility</li>
              <li className="list-fill"></li>
            </ul>
            <ul>
              <li>User Interface Design</li>
              <li>UX</li>
              <li>Wireframes</li>
              <li>Prototyping</li>
              <li className="list-fill"></li>
            </ul>
          </section>
          <PortfolioSection />
          <section>
            <h2>My Social Media</h2>
            <p>Connect</p>
            <p className="text-color-deemphasized">
              looking for connections...
            </p>
          </section>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <a href="#top">
              <i aria-hidden className="far fa-hand-point-up"></i> Back to top
            </a>
          </section>
        </Layout>
      )}
    </ThemeToggler>
  )
}
