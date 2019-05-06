import React, { Component } from 'react'
import Select from 'react-select'
import _ from 'lodash'
import classnames from 'classnames'
import Error from './Error'

export default class extends Component {
  _onChange = option => {
    const { input, onChange, onSelectOption } = this.props
    input.onChange(option.value)
    if (onChange) {
      onChange(option.value)
    }
    if (onSelectOption) {
      onSelectOption(option)
    }
  }
  _onBlur = e => e.preventDefault()
  render() {
    const { input, meta, template, templateVariable, required, options = [], fullValue, ...custom } = this.props
    let formattedOptions = options.map(o => ({ ...o, value: o._id || o.value }))
    if (template) {
      formattedOptions = options.map(o => ({
        ...o,
        value: o._id || o.value,
        label: _.template(template)(_.assign({}, o, templateVariable))
      }))
    }
    let value = _.find(formattedOptions, o => o.value === input.value)
    if (fullValue) {
      value = _.find(formattedOptions, o => _.isEqual(o.value, _.get(input.value, 'value')))
    }
    if (!value && formattedOptions[0] && !formattedOptions[0].value && formattedOptions[0].options) {
      //Group options
      _.forEach(formattedOptions, o => {
        value = _.find(o.options, o => o.value === input.value)
        if (value) return false
      })
    }
    if (!required) {
      formattedOptions.unshift({ label: this.props.placeholder || 'Select', value: '' })
      if (!value) value = formattedOptions[0]
    }
    return (
      <div
        className={classnames('select-field-container form-group', {
          'has-error': meta.touched && meta.error,
          'has-value': input && input.value
        })}
      >
        <Select
          classNamePrefix="select-field"
          {...input}
          {...custom}
          value={value}
          onChange={fullValue ? input.onChange : this._onChange}
          options={formattedOptions}
          onBlur={this._onBlur}
        />
        <Error {...meta} />
      </div>
    )
  }
}
