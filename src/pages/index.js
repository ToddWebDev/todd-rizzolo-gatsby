import React, { useState } from "react"
import Layout from "../components/layout"
import OverviewSection from "../components/overviewSection"
import HighlightSection from "../components/highlightSection"
import PortfolioSection from "../components/portfolioSection"
import ExamplesSection from "../components/examplesSection"
import ContactSection from "../components/contactSection"
import useVH from "react-viewport-height"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import scrollTo from "gatsby-plugin-smoothscroll"

export default () => {
  useVH()
  const scrollToTop = e => {
    e.preventDefault()
    scrollTo("#top")
  }

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div id="top">
          <Layout>
            <div style={{ position: "absolute", top: "3rem", right: "3rem" }}>
              {theme === "light" ? (
                <button onClick={() => toggleTheme("dark")}>
                  <i aria-hidden className="fas fa-cloud-sun"></i> Light Theme
                </button>
              ) : (
                <button onClick={() => toggleTheme("light")}>
                  <i aria-hidden className="fas fa-moon"></i> Dark Theme
                </button>
              )}
            </div>
            <OverviewSection />
            <HighlightSection />
            <PortfolioSection />
            <ExamplesSection />
            <ContactSection />
            <section>
              <a href="#" onClick={e => scrollToTop(e)}>
                <i aria-hidden className="fas fa-angle-double-up"></i> Back to top
              </a>
            </section>
          </Layout>
        </div>
      )}
    </ThemeToggler>
  )
}
