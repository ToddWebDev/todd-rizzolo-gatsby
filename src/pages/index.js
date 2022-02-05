import React, { useState } from "react"
import Layout from "../components/layout"
import PortfolioSection from "../components/portfolioSection"
import ExamplesSection from "../components/examplesSection"
import ContactSection from "../components/contactSection"
import useVH from "react-viewport-height"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import scrollTo from "gatsby-plugin-smoothscroll"

export default () => {
  const [readMore, setReadMore] = useState(false)
  useVH()
  const scrollToTop = e => {
    e.preventDefault()
    scrollTo("#top")
  }

  const descriptionText =
    "I'm a front-end software developer with a strong focus on javascript, user interface design and implementation. I help conceptualize, facilitate, design, prototype and build digital products. My experience includes writing functional, well thought-out and production-ready code, that is unit tested and meets the design requirements of detailed prototypes and mockups. I'm a self starter, a team player and have many years of experience working in a scrum and agile oriented system. I have strong communication skills, enjoy solving complex problems and most of all, I enjoy building great digital products."

  const handleClick = e => {
    e.preventDefault()
    setReadMore(true)
  }

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div id="top">
          <Layout>
            <section>
              <div style={{ position: "absolute", top: "3rem", right: "3rem" }}>
                {theme === "light" ? (
                  <button onClick={() => toggleTheme("dark")}>
                    <i aria-hidden className="fas fa-cloud-sun"></i> Light Mode
                  </button>
                ) : (
                  <button onClick={() => toggleTheme("light")}>
                    <i aria-hidden className="fas fa-moon"></i> Dark Mode
                  </button>
                )}
              </div>
              <h2>Front-End Web Developer</h2>
              <blockquote>
                {readMore
                  ? descriptionText
                  : descriptionText.slice(0, 311) + "..."}
                <br />
                {!readMore && (
                  <a href="#" onClick={e => handleClick(e)}>
                    Read More
                  </a>
                )}
              </blockquote>

              <h3>Toolbox</h3>
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
            <ExamplesSection />
            <ContactSection />
            <section>
              <a href="#" onClick={e => scrollToTop(e)}>
                <i aria-hidden className="far fa-hand-point-up"></i> Back to top
              </a>
            </section>
          </Layout>
        </div>
      )}
    </ThemeToggler>
  )
}
