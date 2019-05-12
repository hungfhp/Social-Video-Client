import axios from 'axios'
import getConfig from 'next/config'
import * as cookie from './cookie'
const publicConfig = getConfig().publicRuntimeConfig || {}

export default function fetchApi(url, config = {}, req) {
  const apiConfig = publicConfig.api || {}
  let apiURL = `${apiConfig.protocol}://${apiConfig.host}` + url

  if (!!req || typeof window === 'undefined') {
    const reqHeader = (req && req.headers) || {}
    config.headers = { ...reqHeader, host: apiConfig.host }
  } else {
    const token = cookie.getCookie('token')
    if (token) {
      config.headers = { authorization: token }
    }
    // config.headers = {
    //   ...config.header,
    //   'Allow-Control-Allow-Origin': '*'
    // }
  }
  if (config.headers && config.headers.host) {
    delete config.headers.host // wating config ACAO
  }

  return axios({ ...config, url: apiURL })
}
