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
import ReactPlayer from 'react-player'

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
    // this.refs.player.subscribeToStateChange(this.handleStateChange)
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
  onProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onProgressMp3 = state => {
    console.log('onProgressMp3', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  render() {
    const { classes, theme, movie, play } = this.props
    const { player } = this.state
    const embeds = movie.embeds || []

    // console.log(player.getState())
    // return (
    //   <React.Fragment>
    //     <ReactPlayer
    //       url="hhttps://youtu.be/yr2tD9VXhpI"
    //       playing
    //       controls={true}
    //       onProgress={this.onProgress}
    //     />
    //     <ReactPlayer
    //       url="https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"
    //       playing
    //       controls={true}
    //       onProgress={this.onProgressMp3}
    //     />
    //   </React.Fragment>
    // )

    return (
      <div className={classes.wrapper}>
        <ReactPlayer
          url={(embeds.length && embeds[0].embedUrl) || 'https://youtu.be/yr2tD9VXhpI'}
          playing
          controls={true}
          // onProgress={this.onProgressMp3}
        />
        {/* <Player autoPlay ref="player" className={classes.player}>
          {embeds.length &&
            embeds.map((embed, index) => {
              return <source key={index} src={'https://youtu.be/yr2tD9VXhpI' || embed.embedUrl} />
            })}
        </Player> */}
      </div>
    )
  }
}

MoviePlayer.propTypes = {
  movie: PropTypes.object.isRequired
}
