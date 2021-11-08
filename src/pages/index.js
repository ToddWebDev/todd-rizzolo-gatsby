import React from "react"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <section>
        <h2>Front End Web Developer</h2>
        <p>Toolbox</p>
        <ul>
          <li>Javascript</li>
          <li>Webpack</li>
          <li>React</li>
          <li>Gatsby</li>
          <li>Angular</li>
          <li>GraphQL</li>
          <li>Accessibility</li>
          <li>User Interface Design</li>
          <li>UX</li>
          <li>Wireframes</li>
          <li>Prototyping</li>
        </ul>
      </section>
      <section>
        <h2>My Projects</h2>
        <p>Portfolio</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </section>
    </Layout>
  )
}
