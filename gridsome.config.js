// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",

  templates: {
    WordPressCategory: "/category/:slug", // adds route for "category" post type (Optional)
    WordPressPost: "/:year/:month/:day/:slug", //adds route for "post" post type (Optional)
    WordPressPostTag: "/tag/:slug", // adds route for "post_tag" post type (Optional)
    WordPressPage: "/:slug",
    Denver: [{ path: "/denver/:id", component: "src/templates/DenverInfo.vue" }]
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/blog/**/*.md",
        typeName: "Post",
        remark: {
          // remark options
        }
      }
    },
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "http://directus.roomkm.com/index.php", // required
        apiBase: "wp-json",
        typeName: "WordPress"
      }
    }
  ]
};
