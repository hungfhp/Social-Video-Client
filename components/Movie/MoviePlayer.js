import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
// import Grid from '@material-ui/core/Grid'
// import Link from '../../../components/Link'
// import Typography from '@material-ui/core/Typography'
// import { getImageMovie } from '../../../common/utils/helpers'
// import PlayArrowIcon from '@material-ui/icons/PlayArrow'
// import IconButton from '@material-ui/core/IconButton'
// import Button from '@material-ui/core/Button'
// import ReactPlayer from 'react-player'
import { Player } from 'video-react'

import 'video-react/styles/scss/video-react.scss' // or import scss

const styles = theme => ({
  wrapper: {
    // position: 'relative',
    // paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */,
    // background: '#090808'
  },
  player: {
    // position: 'absolute',
    // top: '0',
    // left: '0'
  }
})
@withStyles(styles, { withTheme: true })
export default class MoviePlayer extends Component {
  state = {
    player: {},
    currentTime: 0,
    paused: true
  }
  // componentDidMount() {
  //   // const { player } = this.refs.player
  //   this.setState({ player: this.refs.player })
  // }
  componentDidMount() {
    // subscribe state change
    this.refs.player.subscribeToStateChange(this.handleStateChange)
  }

  handleStateChange = (state, prevState) => {
    // copy player state to this component's state
    this.setState({
      player: state,
      currentTime: state.currentTime,
      paused: state.paused
    })
    // console.log(this.state)
  }
  render() {
    const { classes, theme, movie, play } = this.props
    const { player } = this.state
    const embeds = movie.embeds || []

    // console.log(player.getState())

    return (
      <div className={classes.wrapper}>
        <Player autoPlay ref="player" className={classes.player}>
          {embeds.length &&
            embeds.map((embed, index) => {
              return <source key={index} src={embed.embedUrl} />
            })}
        </Player>
      </div>
    )
  }
}

MoviePlayer.propTypes = {
  movie: PropTypes.object.isRequired
}
