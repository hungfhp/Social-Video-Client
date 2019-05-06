import React, { Component } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import './styles.scss'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Paper from '@material-ui/core/Paper'
import SuggestMovies from './components/SuggestMovies'
// import SuggestMovies from '../../containers/Movie/SuggestMovies'
// import AppBar from '@material-ui/core/AppBar';
import Loading from '../../components/Loading'
import { getSuggestMovies } from './action'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary
  }
})

@connect(
  state => ({
    user: state.common.user,
    isAuthenticated: state.common.isAuthenticated,
    suggestMovies: state.home.suggestMovies
  }),
  {
    getSuggestMovies
  }
)
@withStyles(styles, { withTheme: true })
export default class Home extends Component {
  state = {}
  componentWillMount() {
    // this.props.getSuggestMovies()
  }
  render() {
    const { classes, theme, suggestMovies } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home page" />
        </Head>
        <div id="home" className={classes.root}>
          <Grid container spacing={theme.spacing.unit * 5} alignContent="space-between">
            <Grid item xs={9}>
              <Loading loading={!suggestMovies.loaded} />
              {suggestMovies.loaded && <SuggestMovies movies={suggestMovies} />}
            </Grid>

            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}
