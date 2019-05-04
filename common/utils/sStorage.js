import * as cookies from './cookie'
const sStorage = {
  get: key => {
    if (typeof Storage !== 'undefined') {
      return localStorage.getItem(key)
    } else {
      return cookies.getCookie(key)
    }
  },
  getObject: key => {
    let data = sStorage.get(key)
    try {
      return JSON.parse(data)
    } catch (error) {
      return null
    }
  },
  set: (key, obj) => {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem(key, typeof obj === 'string' ? obj : JSON.stringify(obj))
    } else {
      cookies.setCookie(key, typeof obj === 'string' ? obj : JSON.stringify(obj), 365)
    }
  }
}
export default sStorage
