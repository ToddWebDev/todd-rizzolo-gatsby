/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-smoothscroll`,
  ],
  siteMetadata: {
    siteUrl: "https://www.toddrizzolo.com",
    title: "Todd Rizzolo - Half Stack Dev",
    description: "Todd Rizzolo Front-End Developer Portfolio Website",
    image: "images/sanclemente2022.jpg",
  },
}
