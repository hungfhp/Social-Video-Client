import React, { Component } from 'react'
import classnames from 'classnames'

export default class extends Component {
  handleToggle = () => {
    const { input = {}, disabled } = this.props
    if (disabled) return
    let value = true
    if (input.value) {
      value = false
    }
    input.onChange(value)
    if (this.props.onChangeValue) {
      this.props.onChangeValue(value)
    }
  }
  render() {
    const { input = {}, placeholder, disabled, control } = this.props
    return (
      <div
        className={classnames('check-box-field row-flex item-center form-group clickable', {
          'color-primary': input.value,
          disabled,
          'no-touch': disabled,
          'control-class': control
        })}
      >
        {/* <i className={input.value ? 'far fa-check-square' : 'far fa-square'} onClick={this.handleToggle} /> */}
        <div className={input.value ? 'icon check-box-true' : 'icon check-box-false'} onClick={this.handleToggle}>
          <i className="fa fa-check" />
        </div>
        {placeholder && (
          <span className="left-offset-xs" onClick={this.handleToggle}>
            {placeholder}
          </span>
        )}
      </div>
    )
  }
}
