import React, { Component } from 'react'
import classnames from 'classnames'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import _ from 'lodash'
import { Scrollbars } from 'react-custom-scrollbars'
import Error from './Error'

export default class extends Component {
  _onSelect = option => {
    const { input } = this.props
    input.onChange(option.value)
    if (this.props.onSelect) this.props.onSelect(option)
  }
  render() {
    const {
      input,
      meta,
      className,
      options = [],
      divider,
      placeholder,
      template,
      templateVariable,
      scrollStyle
    } = this.props
    const Scroll = scrollStyle ? Scrollbars : 'div'
    return (
      <div
        className={classnames('select-radio-container form-group', className, {
          'has-error': meta.touched && meta.error,
          'has-value': input && input.value
        })}
      >
        {placeholder && <label className="label-placeholder">{placeholder}</label>}
        <Scroll style={scrollStyle} universal={scrollStyle && true}>
          <ul className="ul-select-rarito">
            {options.map((option, i) => {
              if (i === 0 && divider) {
                return [
                  <li
                    key={i}
                    className={classnames({ active: _.isEqual(input.value, option.value) })}
                    onClick={() => this._onSelect(option)}
                  >
                    <a>{option.label}</a>
                  </li>,
                  divider === true ? <MenuItem key="divider" divider /> : divider
                ]
              }
              return (
                <li
                  key={i}
                  className={classnames({ active: _.isEqual(input.value, option.value) })}
                  onClick={() => this._onSelect(option)}
                >
                  <a>
                    {_.isString(template)
                      ? _.template(template)(_.assign({}, option, templateVariable))
                      : _.isFunction(template)
                        ? template(_.assign({}, option, templateVariable))
                        : option.name || option.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </Scroll>
        <Error {...meta} />
      </div>
    )
  }
}
