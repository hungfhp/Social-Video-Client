import _ from 'lodash'
// const pathToRegexp = require('path-to-regexp')

export const buildLocaleURL = (location, locale) => {
  const currentLocale = _.get(location, 'query.locale')
  const currentURL =
    (location && location.asPath) || (window && window.location && window.location.href)
  if (!currentURL) return ''
  if (locale === 'en' && !currentLocale) return currentURL
  if (!currentLocale) return `/${locale}${currentURL}`
  let urlArr = currentURL.split('/')
  urlArr[1] = locale
  return urlArr.join('/')
}
export const getNativeRootURL = req =>
  req
    ? req.protocol + '://' + req.get('host')
    : window.location.protocol + '//' + window.location.host

export const getParameterByName = name => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    results = regex.exec(window.location.search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

export const generateLanding = params => {}

export const parseParams = params => {}

export const updateUrlParameter = (uri, key, value) => {
  // remove the hash part before operating on the uri
  var i = uri.indexOf('#')
  var hash = i === -1 ? '' : uri.substr(i)
  uri = i === -1 ? uri : uri.substr(0, i)

  var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
  var separator = uri.indexOf('?') !== -1 ? '&' : '?'

  if (!value) {
    // remove key-value pair if value is empty
    uri = uri.replace(new RegExp('([?&]?)' + key + '=[^&]*', 'i'), '')
    if (uri.slice(-1) === '?') {
      uri = uri.slice(0, -1)
    }
    // replace first occurrence of & by ? if no ? is present
    if (uri.indexOf('?') === -1) uri = uri.replace(/&/, '?')
  } else if (uri.match(re)) {
    uri = uri.replace(re, '$1' + key + '=' + value + '$2')
  } else {
    uri = uri + separator + key + '=' + value
  }
  return uri + hash
}
