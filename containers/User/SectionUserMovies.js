import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import UserItemLarge from '../../components/User/UserItemLarge'
import fetchApi from '../../common/utils/fetchApi'
import SectionMovies from '../../containers/Movie/SectionMovies'

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {}
})

@withStyles(styles, { withTheme: true })
export default class SectionUserMovies extends Component {
  state = {
    ownMovies: {
      loaded: false,
      pagination: {},
      data: []
    }
  }
  getMoviesByUser = () => {
    const { user } = this.props
    const { ownMovies } = this.state

    fetchApi('/movies', {
      params: {
        filters: {
          uploader: user._id
        },
        limit: 4
      }
    })
      .then(res => {
        if (res.data && res.data.data && res.data.data.length) {
          this.setState({ ownMovies: { ...res.data, loaded: true } })
        } else {
          this.setState({ ownMovies: { ...ownMovies, loaded: true } })
        }
      })
      .catch(error => {
        this.setState({ ownMovies: { ...ownMovies, loaded: true } })
        console.error(error)
      })
  }
  componentDidMount() {
    this.getMoviesByUser()
  }
  render() {
    const { classes, theme, title, user = {} } = this.props
    const { ownMovies } = this.state
    if (ownMovies.data && ownMovies.data.length) {
      return (
        <React.Fragment>
          <Grid container spacing={theme.spacing.unit * 2}>
            <Grid item xs={12}>
              <UserItemLarge user={user} />
            </Grid>

            <Grid item xs={12}>
              <SectionMovies movies={ownMovies} />
            </Grid>
          </Grid>
        </React.Fragment>
      )
    } else {
      return null
    }
  }
}
