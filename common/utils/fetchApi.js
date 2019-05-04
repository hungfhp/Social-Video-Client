import axios from 'axios'
import getConfig from 'next/config'
const privateConfig = getConfig().serverRuntimeConfig || {}

export default function fetchApi(url, config = {}, req) {
  console.log('fetchApi', url)
  // TODO dispatch fetching status
  let apiURL = ''
  if (req || typeof window === 'undefined') {
    const apiConfig = privateConfig.api || {}
    const reqHeader = (req && req.headers) || {}
    config.headers = { ...reqHeader, host: apiConfig.host }
    delete config.headers.host // wating config ACAO
    apiURL = `${apiConfig.protocol}://${apiConfig.host}`
  }
  return axios({ ...config, url: apiURL + url })
}
