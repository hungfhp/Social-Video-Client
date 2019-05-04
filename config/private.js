if (typeof window !== 'undefined') throw new Error("You can't acssess server config in client")
const env = process.env.NODE_ENV || 'dev'
module.exports = {
  dev: {
    // Avoid using "development" because nextjs will turn on hot reload
    isDev: true,
    assetPrefix: '',
    secret: 'development',
    api: {
      host: 'api-social.thuyetminhphim.com/api',
      protocol: 'http'
    }
  },
  test: {
    assetPrefix: '',
    secret: 'test',
    api: {
      host: 'api-social.thuyetminhphim.com/api',
      protocol: 'http'
    }
  },
  production: {
    assetPrefix: '',
    secret: 'production',
    api: {
      host: 'api-social.thuyetminhphim.com/api',
      protocol: 'http'
    }
  }
}[env]
