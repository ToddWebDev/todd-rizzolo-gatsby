import React from "react"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout id="top">
      <section>
        <h2>Front-End Web Developer</h2>
        <p>Toolbox</p>
        <ul className="flex-list">
          <li>Javascript</li>
          <li>Webpack</li>
          <li>React</li>
          <li>AngularJS</li>
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
          some of the results on <strong>social media</strong>, and examples of
          my code on <strong>Code Sandbox</strong> and <strong>CodePen</strong>.
          Additionally, you may see some of my open source side projects on{" "}
          <strong>GitGub</strong>.
        </p>
        <div className="cards">
          <div className="card">
            <h3>Ministry Grid</h3>
            <p>A training web app tailored for church leaders.</p>
            <a href="#">View More</a>
          </div>
          <div className="card">
            <h3>Ministry Grid</h3>
            <p>Digital curriculum tailored for church leaders.</p>
            <a href="#">View More</a>
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
          <i class="far fa-hand-point-up"></i> Back to top
        </a>
      </section>
    </Layout>
  )
}
