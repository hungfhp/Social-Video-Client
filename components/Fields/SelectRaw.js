import React, { Component } from 'react'
import classnames from 'classnames'
import _ from 'lodash'
import Error from './Error'

export default class extends Component {
  componentDidUpdate(prevProps) {
    const { input, options } = this.props
    let value = input && input.value
    value = _.isNumber(value) ? _.toNumber(value) : value
    if (value && !_.find(options, o => o.value == value|| o._id == value) && input.onChange) { // eslint-disable-line
      input.onChange('')
    }
  }

  render() {
    const {
      input,
      meta = {},
      options = [],
      placeholder,
      template,
      templateVariable,
      className,
      classNameContainer,
      notNull
    } = this.props
    return (
      <div
        className={classnames('select-raw-container form-group', classNameContainer, {
          'has-error': meta.touched && meta.error,
          'has-value': (input && input.value) || (input && input.defaultValue)
        })}
      >
        <select {...input} className={className}>
          {!notNull && <option value="">{placeholder}</option>}
          {options.map((option, i) => (
            <option value={option._id || option.value} key={i}>
              {template ? _.template(template)(_.assign({}, option, templateVariable)) : option.name || option.label}
            </option>
          ))}
        </select>
        <Error {...meta} />
      </div>
    )
  }
}
