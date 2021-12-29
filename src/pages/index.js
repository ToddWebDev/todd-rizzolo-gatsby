import React from "react"
import Layout from "../components/layout"
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
        <div className="cards">
          <div className="card">
            <h3>Ministry Grid</h3>
            <p>A training web app tailored for church leaders.</p>
            <a
              href="https://ministrygrid.com/"
              target="_blank"
              rel="noreferrer"
            >
              View More
            </a>
            <ul>
              <li>React</li>
              <li>AngularJS</li>
              <li>UX/UI</li>
            </ul>
          </div>
          <div className="card">
            <h3>Digital Curriculum</h3>
            <p>A digital curriculum web app tailored for church leaders.</p>
            <a
              href="https://ministrygrid.com/curriculum"
              target="_blank"
              rel="noreferrer"
            >
              View More
            </a>
            <ul>
              <li>React</li>
              <li>UX/UI</li>
            </ul>
          </div>
        </div>
      </section>
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
