/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mark Rankin Memorial`,
    siteUrl: `https://www.yourdomain.tld`,
    author: "Tyler Rankin"
  },
  plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`, // Needed for dynamic images
        
  ],
}
