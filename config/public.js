const env = process.env.NODE_ENV || 'dev'
module.exports = Object.assign(
  {
    local: {
      api: {
        host: 'localhost:3000/api',
        protocol: 'https'
      },
      assetPrefix: '',
      gtmId: 'GTM-M8FJ473',
      siteKeyInvisibleCapthca: '6LcHOHEUAAAAAL2YKeuOa_X8E9Xbum40071A7Plv'
    },
    dev: {
      // Avoid using "development" because nextjs will turn on hot reload
      api: {
        host: 'api-social.thuyetminhphim.com/api',
        protocol: 'https'
      },
      assetPrefix: '',
      gtmId: 'GTM-M8FJ473',
      siteKeyInvisibleCapthca: '6LcHOHEUAAAAAL2YKeuOa_X8E9Xbum40071A7Plv'
    },
    staging: {
      api: {
        host: 'api-social.thuyetminhphim.com/api',
        protocol: 'https'
      },
      assetPrefix: '',
      gtmId: 'GTM-KVMRCLX',
      siteKeyInvisibleCapthca: '6LcHOHEUAAAAAL2YKeuOa_X8E9Xbum40071A7Plv'
    },
    production: {
      api: {
        host: 'api-social.thuyetminhphim.com/api',
        protocol: 'https'
      },
      assetPrefix: '',
      gtmId: 'GTM-KVMRCLX',
      siteKeyInvisibleCapthca: '6LcHOHEUAAAAAL2YKeuOa_X8E9Xbum40071A7Plv'
    }
  }[env],
  {
    gitBranch: process.env.GIT_BRANCH
  }
)
