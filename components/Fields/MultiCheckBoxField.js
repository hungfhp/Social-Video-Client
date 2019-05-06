import React, { Component } from 'react'
import classnames from 'classnames'
import _ from 'lodash'

export default class extends Component {
  handleToggle = id => {
    const { input = {} } = this.props
    const values = input.value || []
    if (_.includes(values, id)) {
      input.onChange(_.filter(values, o => o !== id))
    } else {
      input.onChange([...values, id])
    }
  }
  render() {
    const { input = {}, options, ItemComponent, className } = this.props
    return (
      <div className={classnames('row-flex item-center flex-wrap multi-checkbox-wrap', className)}>
        {options.map((option, i) => (
          <div
            key={i}
            className={classnames('row-flex item-center form-group', {
              'color-primary': _.includes(input.value, option.value || option._id)
            })}
          >
            <i
              className={
                _.includes(input.value, option.value || option._id)
                  ? 'far fa-check-square clickable'
                  : 'far fa-square clickable'
              }
              onClick={() => this.handleToggle(option.value || option._id)}
            />
            <span className="left-offset-xs clickable" onClick={() => this.handleToggle(option.value || option._id)}>
              {ItemComponent ? <ItemComponent option={option} /> : option.label || option.name}
            </span>
          </div>
        ))}
      </div>
    )
  }
}
