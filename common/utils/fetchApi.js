import axios from 'axios'
import getConfig from 'next/config'
// import config from '../../next.config.js'

// const privateConfig = getConfig().serverRuntimeConfig || {}
const publicConfig = getConfig().publicRuntimeConfig || {}

export default function fetchApi(url, config = {}, req) {
  // console.log('req', req && req.headers)
  // TODO dispatch fetching status
  const apiConfig = publicConfig.api || {}
  let apiURL = `${apiConfig.protocol}://${apiConfig.host}` + url

  // console.log(apiURL)
  // console.log(req && req.headers)
  if (req || typeof window === 'undefined') {
    const reqHeader = (req && req.headers) || {}
    config.headers = { ...reqHeader, host: apiConfig.host }
    delete config.headers.host // wating config ACAO
  }

  // console.log(object)

  return axios({ ...config, url: apiURL })
}
