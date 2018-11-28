module.exports = {
  siteTitle: "Juan Lucha", // Site title.
  siteTitleShort: "Juan Lucha", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Juan Lucha: Software Developer", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://juanlucha.com", // Domain of your website without pathPrefix.
  pathPrefix: "/juanlucha.com", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Developer tips with a geeky flavor", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Juan Lucha", // Username to display in the author segment.
  userTwitter: "https://twitter.com/JuanAdolfoLucha", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Spain", // User location to display in the author segment.
  userAvatar: "https://pbs.twimg.com/profile_images/623424067937402880/XKBOydvC_400x400.jpg", // User avatar to display in the author segment.
  userDescription: "Software developer with a taste for geekyness", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Ravencrow",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/JuanAdolfoLucha",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:juanlucha@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Juan Lucha" // Copyright string for the footer of the website and RSS feed.
};
