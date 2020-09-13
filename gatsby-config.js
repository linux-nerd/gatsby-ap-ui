module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/static/ap-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://2fdf0f2fd83947608f6363af508a3a4c@o447502.ingest.sentry.io/5427444",
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
      }
    }
  ]
};
