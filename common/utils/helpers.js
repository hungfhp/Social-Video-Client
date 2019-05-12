import _ from 'lodash'
// import { parsePhoneNumberFromString } from 'libphonenumber-js'
import getConfig from 'next/config'
const isDev = getConfig().publicRuntimeConfig.isDev

const defaultImageMovie = '/static/images/default-movie.png'
const defaultAvatar = '/static/images/default-avatar.png'

export const getImageMovie = (movie = {}, size = 'medium') => {
  // size: enum[small, medium, large]
  // return movie.thumbnails&&movie.thumbnails.medium
  if (movie.thumbnails && movie.thumbnails[size]) {
    return movie.thumbnails[size] || movie.thumbnails.medium
  }

  if (movie.thumbnails && movie.thumbnails.medium) {
    return movie.thumbnails.medium
  }

  if (movie.photos && movie.photos.length) {
    return movie.photos[0]
  }

  return defaultImageMovie
}

export const getMovieViewsCount = movie => {
  return movie.viewsCount + Math.floor((Date.now() - new Date(movie.createdAt).getTime()) / 100000)
}

export const getMovieSource = movie => {
  return 'sf'
}

export const getAvatarCDN = (image, width = 0, height = 0, protocol = '') => {
  if (!image) return defaultAvatar
  if (image.rejected) return defaultAvatar
  if (image.preview) return image.preview // upload local
  if (protocol) {
    protocol += ':'
  } else if (!isDev) {
    protocol = 'https:'
  }
  if (image.cdnUri && image.filename) {
    return protocol + '//' + image.cdnUri + '/' + image.filename + `_${width}_${height}` // cfj host
  }
  if (image.externalUrl) return image.externalUrl // other host
  return defaultAvatar
}
export function openInNewTab(url) {
  var win = window.open(url, '_blank')
  win.focus()
}

export const calculateCarPrice = ({ car, port = {}, inspection, insurance, couponData = {} }) => {
  let totalPrice = port && port.priceUSD
  if (inspection && port.inspectionUSD && !port.inspection) {
    totalPrice += port.inspectionUSD
  }
  if (!inspection && port.inspectionUSD && port.inspection) {
    totalPrice -= port.inspectionUSD
  }
  if (!insurance && port.insuranceUSD) {
    totalPrice -= port.insuranceUSD
  }
  totalPrice -= calculateCouponDiscount(couponData && couponData.coupon, car)
  return totalPrice
}

export const calculateCouponDiscount = (coupon = {}, car) => {
  let totalDiscount = coupon && coupon.discountUSD
  if (coupon && coupon.discountPercent) {
    const discountByPercen = (coupon.discountPercent * car.priceUSD) / 100
    totalDiscount = totalDiscount > 0 ? _.min([totalDiscount, discountByPercen]) : discountByPercen
  }
  return Math.round(totalDiscount || 0)
}

export const formatNumber = (number, lang = 'en-US') => {
  try {
    return number.toLocaleString(lang)
  } catch (error) {
    return number
  }
}
export const shouldRenderBoxtext = cond => {
  cond = _.pickBy(cond, o => o !== undefined && o !== '')
  if (
    cond.makeModelKey === 'cars' &&
    _.isEmpty(
      _.omit(cond, [
        'limit',
        'sort',
        'make',
        'model',
        'maxYear',
        'minYear',
        'makeModelKey',
        'makeKey',
        'modelKey',
        'facet',
        'country',
        'port',
        'page'
      ])
    )
  ) {
    return true
  }

  if (cond.maxYear !== cond.minYear || !cond.makeModelKey || cond.makeModelKey === 'cars')
    return false
  let data = _.keys(
    _.pick(
      _.omit(cond, ['country', 'port', 'city']),
      (value, key) => key && key.trim() && key.trim() !== '_' && !key.includes('pjax') && value
    )
  )
  return !_.find(
    data,
    o =>
      !_.contains(
        [
          'limit',
          'sort',
          'make',
          'model',
          'maxYear',
          'minYear',
          'makeModelKey',
          'makeKey',
          'modelKey',
          'facet',
          'country',
          'port',
          'page'
        ],
        o
      )
  )
}

export const capitalizeAllFirstLetter = (string, keepCapitalize) => {
  return string.replace(/\w\S*/g, txt => {
    return (
      txt.charAt(0).toUpperCase() + (keepCapitalize ? txt.substr(1) : txt.substr(1).toLowerCase())
    )
  })
}

/*
 * Hash string to integer
 */
export const hashCode = string => {
  var hash = 0,
    i,
    chr
  if (string.length === 0) return hash
  for (i = 0; i < string.length; i++) {
    chr = string.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

export const swap = function(json) {
  var ret = {}
  for (var key in json) {
    ret[json[key]] = key
  }
  return ret
}

export const ignoreClick = e => {
  e.stopPropagation()
}

export const getImageFlagCountry = countryName => {
  return (
    '//static.carfromjapan.com/public/system/assets/img/flags/' +
    String(countryName)
      .trim()
      .toLowerCase()
      .replace(' ', '-') +
    '.png'
  )
}

export const minusBuynowPrice = ({ car, totalDiscount }) => {
  let result = 50 + car.priceUSD * 0.013
  const externalUrl = car.externalUrl || ''
  const limit75 = car.isLegit || externalUrl.includes('tradecarview')
  if (limit75 && result > 75) {
    result = 75
  }
  if (totalDiscount > result) {
    result = 50
  } else if (result > totalDiscount) {
    result = result - totalDiscount
  }
  if (!_.isEmpty(car.tags)) {
    result = 15
  }
  return Math.round(result)
}

export const splitPhone = (fullPhone = '') => {
  const arr = fullPhone.split(' ')
  return {
    countryCode: arr[0],
    phoneNumber: arr.slice(1).join('')
  }
}

// export const formatPhone = (countryCode, phoneNumber) => {
//   const fullPhone = String(countryCode) + String(phoneNumber)
//   const phoneNumberParse = parsePhoneNumberFromString(fullPhone)
//   if (phoneNumberParse) {
//     return phoneNumberParse.formatInternational()
//   }
//   return fullPhone
// }

export const getGender = (user = {}) => {
  if (user.gender) {
    return user.gender
  } else {
    if (
      (user.google && user.google.gender && user.google.gender === 'male') ||
      (user.facebook && user.facebook.gender && user.facebook.gender === 'male') ||
      (user.twitter && user.twitter.gender && user.twitter.gender === 'male')
    ) {
      return 1
    } else if (
      (user.google && user.google.gender && user.google.gender === 'female') ||
      (user.facebook && user.facebook.gender && user.facebook.gender === 'female') ||
      (user.twitter && user.twitter.gender && user.twitter.gender === 'female')
    ) {
      return 2
    } else {
      return 0
    }
  }
}

export const getBackgroundStyle = url => {
  return {
    backgroundImage: 'url("' + url + '")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}

export const numberWithCommas = url => {
  return null
}
