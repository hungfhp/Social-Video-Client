export const setCookie = (name, value, days) => {
  var expires = ''
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}
export const getCookie = (name, decode) => {
  var value = '; ' + document.cookie
  var parts = value.split('; ' + name + '=')
  if (parts.length === 2) {
    const result = parts
      .pop()
      .split(';')
      .shift()
    if (decode) return decodeURIComponent(result)
    return result
  }
}

export const deleteCookie = function(name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
