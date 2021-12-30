import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export function Seo(props) {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
      site(siteMetadata: {}) {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `)

  const defaults = data?.site.siteMetadata

  const title = props.title || defaults.title
  const description = props.description || defaults.description
  const image = new URL(props.image || defaults.image, defaults.siteUrl)
  const url = new URL(props.path || "/", defaults.siteUrl)

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#164c69" />
      <link rel="canonical" href={url} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta name="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      <script
        src="https://kit.fontawesome.com/02130b3d51.js"
        crossOrigin="anonymous"
      ></script>
    </Helmet>
  )
}
