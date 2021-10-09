/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
  siteMetadata: {
    siteUrl: "https://www.toddrizzolo.com",
    title: "Todd Rizzolo",
    description: "Todd Rizzolo Front-End Developer Portfolio Website",
    image: "https://source.unsplash.com/random/50X50",
  },
}
