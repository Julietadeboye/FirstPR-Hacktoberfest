/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `FirstPR`,
    siteUrl: `https://www.yourdomain.tld`
  },
  
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap",{
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `readme`,
      path: `${__dirname}/readme`,
    },
  } , 
  `gatsby-plugin-mdx`, 
  `gatsby-transformer-remark`, 
  `gatsby-plugin-sharp`, 
  `gatsby-transformer-sharp`,
 
 
]

};