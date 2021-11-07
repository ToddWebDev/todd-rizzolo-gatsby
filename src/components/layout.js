import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Seo } from "../components/seo"
import Header from "./header"
import { content } from "../styles/layout.module.css"

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
      <Header />
      <main className={content}>{children}</main>
    </>
  )
}
