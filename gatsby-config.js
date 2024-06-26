const url = 'https://limitoo.com'
module.exports = {
  siteMetadata: {
    title: "Limitoo News",
    description: "Limitoo News is free global news, entertainment, and life website. It will extract hot news from professional news websites in various countries.",
    key: 'Limitoo,limitoo,Limitoo news,news,gobal news,laster news,video,chat',
    author: "@Limitoo",
    siteUrl: url,
    twitter: 'https://twitter.com/Limitoo2',
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-cname",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#560DF8",
        theme_color: "#560DF8",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-antd",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sitemap",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-QN25TS4PP3",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingId: ["G-QN25TS4PP3"],
        // this option places the tracking script into the head of the DOM
        // other options
      },
    },
    {
      resolve: "gatsby-source-mysql",
      options: {
        connectionDetails: {
          // host: '130.61.52.228',
          // user: 'tempnewsadmin',
          // password: 'FD32sd$7De9ds^&',
          // database: 'tempnews'
          host: '130.61.52.228',
          user: 'newsuser',
          password: 'sDsd@#E$%&e9d',
          database: 'newsdb'
        },
        queries: [
          {
            // statement: "select * from news ny, details nyd where ny.id = nyd.news_id order by ny.create_time desc limit 100",
            statement: "SELECT * from news join details on news.id = details.news_id order BY news.create_time DESC  limit 1000",
            idFieldName: "title",
            name: "Lists",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap: `${url}/sitemap.xml`,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
  ],
}
