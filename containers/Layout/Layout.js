import React from 'react'
import { connect } from 'react-redux'
import Header from '../../containers/Header/Header'
import LeftSide from '../../containers/Side/LeftSide'
import Footer from '../../containers/Footer/Footer'
import { withStyles } from '@material-ui/core/styles'
import { autoSave } from '../../common/action'
import PlaceholderLoading from '../../components/Loading/PlaceholderPreload'
import CssBaseline from '@material-ui/core/CssBaseline'

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
            {this.state.routeChanging ? <PlaceholderLoading /> : this.props.children}
          </main>
          <Footer />
        </div>
      </LayoutContext.Provider>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Layout)
