if (typeof window !== 'undefined') throw new Error("You can't acssess server config in client")
const env = process.env.NODE_ENV || 'dev'
module.exports = {
  local: {
    // Avoid using "development" because nextjs will turn on hot reload
    isDev: true,
    assetPrefix: '',
    secret: 'local',
    api: {
      host: 'localhost:3000/api',
      protocol: 'https'
    }
  },
  dev: {
    // Avoid using "development" because nextjs will turn on hot reload
    isDev: true,
    assetPrefix: '',
    secret: 'development',
    api: {
      host: 'api-social.thuyetminhphim.com/api',
      protocol: 'https'
    }
  },
  test: {
    assetPrefix: '',
    secret: 'test',
    api: {
      host: 'api-social.thuyetminhphim.com/api',
      protocol: 'https'
    }
  },
  production: {
    assetPrefix: '',
    secret: 'production',
    api: {
      host: 'api-social.thuyetminhphim.com/api',
      protocol: 'https'
    }
  }
}[env]
