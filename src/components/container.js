import React from "react"
import containerStyles from "./container.module.css"
import { Link, useStaticQuery, graphql } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query GetSitTitle {
      site(siteMetadata: {}) {
        siteMetadata {
          title
        }
      }
    }
  `)

  const meta = data?.site?.siteMetadata ?? {}

  return (
    <div className={containerStyles.container}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>{meta.title}</h3>
        </Link>
        <nav>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  )
}
