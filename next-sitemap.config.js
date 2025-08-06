/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
    trailingSlash:false,
    generateRobotsTxt: true, // (optional)
    outDir: './out', // (optional) The out directory to write the sitemap to.
    // ...other options
    transform: async (config, path) => {
        if (path === (process.env.SITE_URL+'/' || 'https://example.com/')) {
          return {
            loc: path,
            changefreq: 'monthly',
            priority: 0.7,
          };
        }
        return {
          loc: path+'.html',
          changefreq: 'daily',
          priority: 0.7,
        };
      }
  }