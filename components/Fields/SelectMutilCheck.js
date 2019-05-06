import React, { Component } from 'react'
import classnames from 'classnames'
import _ from 'lodash'
import { Scrollbars } from 'react-custom-scrollbars'
import ClickOutSide from '../Helper/ClickOutSide'
class SelectMutilCheck extends Component {
  state = {
    show: false
  }
  scroller = React.createRef()
  toggle = () => {
    if (this.props.onCloseMenu && this.state.show) {
      this.props.onCloseMenu()
    }
    if (this.props.onOpenMenu && !this.state.show) {
      this.props.onOpenMenu()
    }
    this.setState({ show: !this.state.show })
  }
  close = () => {
    if (this.state.show) {
      this.toggle()
      if (this.props.onCloseMenu) {
        this.props.onCloseMenu()
      }
    }
  }
  onSelectItem = value => {
    const { input = {} } = this.props
    const values = input.value || []
    if (_.includes(values, value)) {
      input.onChange(_.filter(values, o => o !== value))
    } else {
      input.onChange([...values, value])
    }
    this.scroller.current.scrollTop()
  }
  render() {
    const { input, meta, placeholder, className, options } = this.props
    const values = input.value || []
    const optionsChecked = _.filter(options, o => _.includes(values, o.value || o._id)) || []
    const optionsUnchecked = _.filter(options, o => !_.includes(values, o.value || o._id)) || []
    const labels = _.map(optionsChecked, o => o.label)
    return (
      <ClickOutSide onClickOutSide={this.close}>
        <div
          className={classnames('SelectMutilCheck clickable form-group', className, {
            'has-error': meta.touched && meta.error,
            'has-value': input && input.value
          })}
        >
          <div onClick={this.toggle} className="fake-select max-1-line">
            {(labels && labels.join(', ')) || placeholder}
          </div>
          {this.state.show && (
            <ul className="outer-menu">
              <li
                style={{ margin: '0 0 5px 0' }}
                className="primary-color row-flex item-center space-between form-group"
              >
                <div className="max-1-line">{(labels && labels.join(', ')) || placeholder}</div>
                <i className="fa fa-chevron-down font-xs" />
              </li>
              <Scrollbars style={{ height: 250 }} universal={true} ref={this.scroller}>
                <React.Fragment>
                  {optionsChecked.map((o, i) => (
                    <li key={i} className="primary-color" onClick={() => this.onSelectItem(o.value || o._id)}>
                      <i className="fa fa-check-square" /> {o.name || o.label}
                    </li>
                  ))}
                  {optionsChecked.length > 0 && <li className="deliver" key="deliver" />}
                  {optionsUnchecked.map((o, i) => (
                    <li key={i} onClick={() => this.onSelectItem(o.value || o._id)}>
                      <i className="far fa-square" /> {o.name || o.label}
                    </li>
                  ))}
                </React.Fragment>
              </Scrollbars>
            </ul>
          )}
        </div>
      </ClickOutSide>
    )
  }
}

export default SelectMutilCheck
