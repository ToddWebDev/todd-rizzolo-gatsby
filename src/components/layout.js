import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Seo } from "../components/seo"
import Header from "./header"
import { header, content } from "../styles/layout.module.css"

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site(siteMetadata: {}) {
        siteMetadata {
          title
          description
          image
        }
      }
    }
  `)

  const meta = data?.site?.siteMetadata ?? {}

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <Header className={header} />
      <main className={content}>{children}</main>
      <footer>
        <p>
          This site is built with the Jamstack. A Jamstack frontend consists of
          JavaScript, HTML, and CSS. Gatsby generates these files during the
          build process and Netlify provides continuous deployments triggered by
          Git. This site is blazing fast and secure. Yeah, it's pretty awesome.
        </p>
        <a href="#">View Site Performance</a>
      </footer>
    </>
  )
}
