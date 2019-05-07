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
    position: 'relative',
    paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */,
    background: '#090808'
  },
  player: {
    position: 'absolute',
    top: '0',
    left: '0'
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
    console.log(this.state)
  }
  render() {
    const { classes, theme, movie } = this.props
    const { player } = this.state
    // console.log(player.getState())
    return (
      <div>
        <Player ref="player">
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
        {/* <ReactPlayer
          className={classes.player}
          url={movie.embeds && movie.embeds.length && movie.embeds[0].embedUrl}
          playing
          controls
          width="100%"
          height="100%"
          config={{
            file: {
              tracks: [
                {
                  kind: 'subtitles',
                  src: 'https://www.studyphim.vn/movies/getSubtitle/vi/aquaman-2018/1',
                  srcLang: 'vn',
                  default: true
                },
                {
                  kind: 'subtitles',
                  src: 'https://www.studyphim.vn/movies/getSubtitle/vi/aquaman-2018/1',
                  srcLang: 'ja'
                },
                {
                  kind: 'subtitles',
                  src: 'https://www.studyphim.vn/movies/getSubtitle/vi/aquaman-2018/1',
                  srcLang: 'de'
                }
              ]
            }
          }}
        /> */}

        {/* <video id="video" controls preload="metadata">
          <source
            src={movie.embeds && movie.embeds.length && movie.embeds[0].embedUrl}
            type="video/mp4"
          />
          <source
            src={movie.embeds && movie.embeds.length && movie.embeds[0].embedUrl}
            type="video/webm"
          />
          <track
            label="English"
            kind="subtitles"
            srclang="en"
            src="https://www.studyphim.vn/movies/getSubtitle/vi/aquaman-2018/1"
            default
          />
          <track
            label="Deutsch"
            kind="subtitles"
            srclang="de"
            src="https://www.studyphim.vn/movies/getSubtitle/vi/aquaman-2018/1"
          />
          <track
            label="Español"
            kind="subtitles"
            srclang="es"
            src="https://www.studyphim.vn/movies/getSubtitle/vi/aquaman-2018/1"
          />
        </video> */}
      </div>
    )
  }
}

MoviePlayer.propTypes = {
  movie: PropTypes.object.isRequired
}
