import React from 'react'
import { connect } from 'react-redux'
import Header from '../../containers/Header/Header'
import Footer from '../../containers/Footer/Footer'

// import Footer from '../Footer/AppFooter'

export default class extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="wrapper-body">{this.props.children}</div>
        <Footer />
      </React.Fragment>
    )
  }
}
