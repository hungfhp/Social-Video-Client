import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import { animateScroll } from 'react-scroll'
import { AVAILEBLE_LANGUAGES } from '../../common/constants'
import { Router as RouterOrigin } from '../../routes'
import './style.scss'
import Link from '@material-ui/core/Link'

export const Router = RouterOrigin

const getLocaleURL = (url, locale) => {
  if (!url || url === '/') {
    return `/${locale === 'en' ? '' : locale}`
  }
  let urlArr = _.filter(url.split('/'), o => !!o)
  const currentLocale = _.find(AVAILEBLE_LANGUAGES, o => o.key === urlArr[0])
  if (currentLocale) {
    urlArr[0] = locale
  } else if (locale !== 'en') {
    urlArr.unshift(locale)
  }
  return `/${urlArr.join('/')}`
}

export const pushRoute = url => {
  try {
    Router.pushRoute(url)
    animateScroll.scrollToTop({ smooth: 'linear', delay: 0, duration: 0 })
  } catch (error) {
    window.location.href = url
  }
}

@connect(state => ({
  locale: state.common.locale
}))
export default class extends React.Component {
  static propTypes = {
    href: PropTypes.string,
    route: PropTypes.string,
    as: PropTypes.string,
    params: PropTypes.object,
    options: PropTypes.object,
    target: PropTypes.string
  }
  handleRoute = e => {
    const {
      route,
      href,
      as,
      target,
      params,
      options,
      onClick,
      locale,
      reload,
      replace,
      disabledLocale = true
    } = this.props
    const to = disabledLocale
      ? route || href || this.props.as
      : getLocaleURL(route || href || as, locale)
    // debugger
    try {
      if (target !== '_blank' && !reload) {
        e.preventDefault()
        Router.pushRoute(to, params, { ...options, replace })
        animateScroll.scrollToTop({ smooth: 'linear', delay: 0, duration: 0 })
        if (typeof onClick === 'function') onClick(e)
      }
    } catch (error) {
      window.location.href = to
    }
  }
  render() {
    const {
      route,
      href,
      as,
      locale,
      className,
      target,
      style,
      itemProp,
      disabledLocale,
      classes,
      variant,
      color
    } = this.props
    let formatedURL = route || href || this.props.as
    formatedURL = disabledLocale ? formatedURL : getLocaleURL(route || href || as, locale)
    return (
      <Link
        className={className}
        target={target}
        style={style}
        onClick={this.handleRoute}
        href={formatedURL}
        itemProp={itemProp}
        underline="none"
        color={color || 'inherit'}
        variant={variant}
        classes={classes}
      >
        {this.props.children || ' '}
      </Link>
    )
  }
}
