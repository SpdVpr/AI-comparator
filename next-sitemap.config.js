/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.aimodelsrank.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
};