import React from 'react'
import { connect } from 'react-redux'
import Header from '../../containers/Header/Header'
import LeftSide from '../../containers/Side/LeftSide'
import Footer from '../../containers/Footer/Footer'
import { withStyles } from '@material-ui/core/styles'
import { autoSave } from '../../common/action'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router, { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import ContentLoader, { Facebook } from 'react-content-loader'

export const LayoutContext = React.createContext()

// import Footer from '../Footer/AppFooter'
const styles = theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 7
  }
})

@connect(
  state => ({ common: state.common }),
  { autoSave }
)
class Layout extends React.PureComponent {
  state = {
    routeChanging: false
  }
  loadingState = () => this.setState({ routeChanging: true })
  renderState = () => this.setState({ routeChanging: false })
  componentDidMount() {
    // Router.router.events.on('routeChangeStart', this.loadingState)
    // Router.router.events.on('routeChangeComplete', this.renderState)
  }

  componentWillUnmount() {
    // Router.router.events.off('routeChangeComplete', this.renderState)
    // Router.router.events.off('routeChangeStart', this.loadingState)
  }
  render() {
    const {
      location,
      routeName,
      common: { isAuthenticated, user, masterData, likedMovies },
      query,
      classes
    } = this.props

    return (
      <LayoutContext.Provider value={this.state}>
        <div className={classes.root}>
          <CssBaseline />
          <Header
            location={location}
            autoSave={this.props.autoSave}
            user={user}
            isAuthenticated={isAuthenticated}
            likedMovies={likedMovies.data}
            overlaySelectPortRef={this.overlaySelectPortRef}
            routeName={routeName}
            query={query}
            masterData={masterData}
            // classes={classes}
          />
          <LeftSide
            location={location}
            autoSave={this.props.autoSave}
            user={user}
            isAuthenticated={isAuthenticated}
            likedMovies={likedMovies.data}
            overlaySelectPortRef={this.overlaySelectPortRef}
            routeName={routeName}
            query={query}
            masterData={masterData}
            // classes={classes}
          />
          <main className={classes.content}>
            <div className={classes.toolbar} />

            {this.state.routeChanging ? (
              <ContentLoader height={200}>
                {/* Only SVG shapes */}
                <rect x="0" y="0" rx="2" ry="2" width="70" height="70" />
                <rect x="0" y="80" rx="2" ry="2" width="70" height="70" />
                <rect x="80" y="0" rx="2" ry="2" width="70" height="70" />
                <rect x="80" y="80" rx="2" ry="2" width="70" height="70" />
                <rect x="160" y="0" rx="2" ry="2" width="70" height="70" />
                <rect x="160" y="80" rx="2" ry="2" width="70" height="70" />
                <rect x="240" y="0" rx="2" ry="2" width="70" height="70" />
                <rect x="240" y="80" rx="2" ry="2" width="70" height="70" />
                <rect x="320" y="0" rx="2" ry="2" width="70" height="150" />
                <rect x="0" y="160" rx="2" ry="2" width="390" height="10" />
                <rect x="0" y="175" rx="2" ry="2" width="390" height="10" />
              </ContentLoader>
            ) : (
              this.props.children
            )}
          </main>
          <Footer />
        </div>
      </LayoutContext.Provider>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Layout)
