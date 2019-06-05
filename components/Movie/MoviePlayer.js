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
// import { Player } from 'video-react'
import ReactPlayer from 'react-player'

import 'video-react/styles/scss/video-react.scss' // or import scss
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import ReactDOM from 'react-dom'
import Fade from '@material-ui/core/Fade'

const styles = theme => ({
  wrapper: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */,
    background: '#090808'
  },
  player: {
    position: 'absolute',
    top: '0',
    left: '0'
  },
  voice: {
    visibility: 'hidden'
  },
  optionVoice: {
    position: 'absolute',
    top: 0,
    right: 0,
    minWidth: 200,
    minHeight: 50,
    zIndex: 1000,
    backgroundColor: 'transparent'
  }
})
@withStyles(styles, { withTheme: true })
export default class MoviePlayer extends Component {
  state = {
    url: null,
    pip: false,
    playing: false,
    controls: true,
    light: false,
    volume: 0.3,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    movie: {
      onReady: false
    },
    voice: {
      onReady: false
    },
    voiceover: 'no',
    showOptionVoice: false
  }
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }
  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  stop = () => {
    this.setState({ url: null, playing: false })
  }
  onProgressMp3 = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  toggleControls = () => {
    const url = this.state.url
    this.setState(
      {
        controls: !this.state.controls,
        url: null
      },
      () => this.load(url)
    )
  }
  toggleLight = () => {
    this.setState({ light: !this.state.light })
  }
  toggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }
  togglePIP = () => {
    this.setState({ pip: !this.state.pip })
  }
  onPlay = () => {
    this.setState({ playing: true })
  }
  onPlayAll = () => {
    this.setState({ playing: true })
  }
  onEnablePIP = () => {
    this.setState({ pip: true })
  }
  onDisablePIP = () => {
    this.setState({ pip: false })
  }
  onPause = () => {
    this.setState({ playing: false })
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onEnded = () => {
    this.setState({ playing: this.state.loop })
  }
  onDuration = duration => {
    this.setState({ duration })
  }
  onClickFullscreen = () => {
    // screenfull.request(findDOMNode(this.player))
  }
  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>
  }
  onSeek = hihi => {
    this.player.seekTo(hihi)
  }
  ref = player => {
    this.player = player
  }
  onReadyMovie = () => {
    const { movie } = this.state
    const { voiceovers = [] } = this.props.movie
    this.setState({ movie: { ...movie, onReady: true } })
    if (this.state.voice.onReady) {
      this.setState({ playing: true })
    }
    if (!voiceovers.length) {
      this.setState({ playing: true })
    }
  }
  onStartMovie = () => {}
  onReadyVoice = () => {
    const { voice } = this.state
    this.setState({ voice: { ...voice, onReady: true } })
    if (this.state.movie.onReady) {
      this.setState({ playing: true })
    }
  }
  onStartVoice = () => {}
  handleChangeVoiceover = event => {
    this.setState({ voiceover: event.target.value })
  }
  showOptionVoice = () => {
    this.setState({ showOptionVoice: true })
  }
  hideOptionVoice = () => {
    this.setState({ showOptionVoice: false })
  }
  componentDidMount() {
    const { movie } = this.props
    const voiceovers = movie.voiceovers || []
    this.setState({
      voiceover: (voiceovers.length && voiceovers[0].embedUrl) || 'no'
    })
  }

  render() {
    const { classes, theme, movie, play } = this.props
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip,
      showOptionVoice,
      voiceover = 'no'
    } = this.state
    const embeds = movie.embeds || []
    const voiceovers = movie.voiceovers || []
    const hasVoiceover =
      voiceovers.length &&
      voiceovers.find(e => {
        return e.status === 'done'
      })

    return (
      <div
        className={classes.wrapper}
        onMouseEnter={this.showOptionVoice}
        onMouseLeave={this.hideOptionVoice}
      >
        <Fade in={showOptionVoice}>
          <div className={classes.optionVoice}>
            <FormControl fullWidth className={classes.formControl}>
              <Select
                value={hasVoiceover ? voiceover : 'no'}
                onChange={this.handleChangeVoiceover}
                input={
                  <OutlinedInput
                    name="voiceover"
                    id="outlined-age-simple"
                    style={{ color: 'white' }}
                  />
                }
              >
                {hasVoiceover ? (
                  voiceovers.map((voiceover, index) => {
                    if (voiceover.status === 'done') {
                      return <MenuItem value={voiceover.embedUrl}>{voiceover.name}</MenuItem>
                    }
                  })
                ) : (
                  <MenuItem value="no">Chưa có thuyết minh</MenuItem>
                )}
              </Select>
            </FormControl>
          </div>
        </Fade>
        <ReactPlayer
          ref={this.ref}
          className={classes.player}
          url={(embeds.length && embeds[0].embedUrl) || 'https://youtu.be/yr2tD9VXhpI'}
          width="100%"
          height="100%"
          pip={pip}
          playing={playing}
          controls={controls}
          light={light}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onReady={this.onReadyMovie}
          onStart={this.onStartMovie}
          onPlay={this.onPlay}
          onEnablePIP={this.onEnablePIP}
          onDisablePIP={this.onDisablePIP}
          onPause={this.onPause}
          onBuffer={() => this.setState({ playing: false })}
          onSeek={this.onSeek}
          onEnded={this.onEnded}
          onError={e => console.log('onError', e)}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
        />
        <div className={classes.voice}>
          <ReactPlayer
            ref={this.ref}
            className={classes.player}
            url={(voiceovers.length && voiceovers[0].embedUrl) || ''}
            pip={pip}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume + 0.5}
            muted={muted}
            onReady={this.onReadyVoice}
            onStart={this.onStartVoice}
            onPlay={this.onPlayAll}
            onEnablePIP={this.onEnablePIP}
            onDisablePIP={this.onDisablePIP}
            onPause={this.onPause}
            // onBuffer={() => this.setState({playing: false})}
            // onSeek={this.onSeek}
            onEnded={this.onEnded}
            onError={e => console.log('onError', e)}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
          />
        </div>
      </div>
    )
  }
}

MoviePlayer.propTypes = {
  movie: PropTypes.object.isRequired
}
