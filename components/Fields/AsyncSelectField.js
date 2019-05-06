import React, { Component } from 'react'
import AsyncSelect from 'react-select/lib/Async'

export default class extends Component {
  render() {
    const { input, meta, ...custom } = this.props
    return (
      <div className="async-field-container">
        <AsyncSelect
          classNamePrefix="async-field"
          cacheOptions
          {...input}
          {...custom}
          onBlur={event => event.preventDefault()}
        />
      </div>
    )
  }
}
