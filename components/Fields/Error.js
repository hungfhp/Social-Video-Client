import React, { Component } from 'react'
import { translate } from 'react-i18next'
import './Fields.scss'

@translate()
export default class extends Component {
  render() {
    const { touched, error, t, values } = this.props
    if (!touched || !error) return null
    return (
      <div className="field__error-text">
        <span>{t(error, values)}</span>
      </div>
    )
  }
}
