import React from "react"
import Layout from "../components/layout"
import PortfolioSection from "../components/portfolioSection"
import useVH from "react-viewport-height"

export default () => {
  useVH()
  return (
    <Layout id="top">
      <section>
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
        <p className="text-color-deemphasized">looking for connections...</p>
      </section>
      <section>
        <a href="#top">
          <i aria-hidden className="far fa-hand-point-up"></i> Back to top
        </a>
      </section>
    </Layout>
  )
}
